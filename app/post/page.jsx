"use client";
import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import Map from "../components/Map";
import { getProvinces, getDistricts, getWards, createProperty } from "../components/API";
import UploadImage from "../components/UploadImage";
function Post() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedBedroom, setSelectedBedroom] = useState(0);
  const [selectedBathroom, setSelectedBathroom] = useState(0);
  const [selectedParkinglot, setSelectedParkinglot] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [area, setArea] = useState(0);
  const [shortDescription, setShortDescription] = useState('');
  const [address, setAddress] = useState('');
  const [propertyInfoUpdated, setPropertyInfoUpdated] = useState(false);
  const [propertyInfo, setPropertyInfo] = useState({
    name: "",
    shortDescription: "",
    detailDescription: "",
    price: 0,
    provinceCode: "",
    districtCode: "",
    wardCode: "",
    address: "",
    bedroom: 0,
    bathroom: 0,
    constructionYear: 0,
    parkingSlot: 0,
    propertyCategory: "", 
    category: "", 
    area: 0,
    imageUrls: [],
  });  
  const handlePost = async () => {
    // Convert string values to integers
    const parsedPrice = parseInt(price, 10);
    const parsedBedroom = parseInt(selectedBedroom, 10);
    const parsedBathroom = parseInt(selectedBathroom, 10);
    const parsedYear = parseInt(selectedYear, 10);
    const parsedParkinglot = parseInt(selectedParkinglot, 10);
    const parsedArea = parseInt(area, 10);
  
    // Set the updated property information
    setPropertyInfo({
      propertyName: title,
      shortDescription: shortDescription,
      detailDescription: description,
      price: parsedPrice,
      provinceCode: selectedProvince,
      districtCode: selectedDistrict,
      wardCode: selectedWard,
      address: address,
      bedroom: parsedBedroom,
      bathroom: parsedBathroom,
      constructionYear: parsedYear,
      parkingSlot: parsedParkinglot,
      propertyCategory: selectedType,
      category: selectedCategory,
      area: parsedArea,
      imageUrls: imageUrls.map((file) => file.url),
    });
  
    // Call the API with the updated property information
    const response = await createProperty(
      title,
      shortDescription,
      description,
      parsedPrice,
      selectedProvince,
      selectedDistrict,
      selectedWard,
      address,
      parsedBedroom,
      parsedBathroom,
      parsedYear,
      parsedParkinglot,
      selectedType,
      selectedCategory,
      parsedArea,
      imageUrls.map((file) => file.url)
    );
  
    console.log(response);
    setPropertyInfoUpdated(true);
  };
  const handleProvinceChange = (provinceCode) => {
    getDistricts(provinceCode).then((data) => {
      setDistricts(data.elements);
      setSelectedProvince(provinceCode);
    });
  };
  const handleDistrictChange = (districtCode) => {
    getWards(districtCode).then((data) => {
      setWards(data.elements);
      setSelectedDistrict(districtCode);
    });
  };
  const handleFileChange = (uploadedFiles) => {
    console.log("Các tệp đã tải lên:", uploadedFiles);
    setImageUrls(uploadedFiles.map(file => file));

};
const handleTypeClick = (type) => {
  setSelectedType(type);
};
  useEffect(() => {
    getProvinces().then((data) => {
      setProvinces(data.elements);
      console.log(data.elements);
    });
  }, []);
  useEffect(() => {
    if (propertyInfoUpdated) {
      console.log(propertyInfo);
      setPropertyInfoUpdated(false);
    

    }
  }, [propertyInfo, propertyInfoUpdated]);

  return (
    <div className="flex flex-col ">
      <Breadcrumbs className="bg-white w-auto h-[21px] mb-[30px] ">
        <a href="" className="opacity-60 text-sm font-medium text-[#282E3C]">
          Trang chủ
        </a>
        <a href="" className="opacity-60 text-sm font-medium text-[#282E3C]">
          Đăng tin bất động sản
        </a>
      </Breadcrumbs>
      <div className="flex flex-row p-[30px]  mb-10 gap-x-10 rounded-2xl border-[0.5px] border-solid border-[#f5f5f5] bg-[#f8f8f8]">
        <div className="flex flex-col ">
          <span className="text-[#1c1d21] text-sm font-semibold  mb-[30px]">
            Thông tin cơ bản
          </span>
          <div className="flex flex-col gap-y-2">
          <label className="text-[#111] text-sm font-medium">
                Tên dự án
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-[320px] inline-flex p-[15px] items-start justify-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
              />          </div>
          <div className="flex flex-row gap-x-10 mb-[30px]">
            <div className="flex flex-col max-w-[320px] gap-y-[8px]">
              <label className="text-[#111] text-sm font-medium">
                Giới thiệu dự án
              </label>
              <input
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                type="text"
                className="w-[320px] inline-flex p-[15px] items-start justify-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
              />
            </div>
            <div className="flex flex-col max-w-[320px] gap-y-[8px]">
              <label className="text-[#111] text-sm font-medium">
                {" "}
                <label className="text-[#f62a19] text-sm font-medium">
                  *
                </label>{" "}
                Loại hình
              </label>
              <div className="flex flex-row gap-x-5">
                <button
                  className={`flex w-[120px] items-center justify-center p-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-[#1c1d21] text-sm font-normal ${
                    selectedType === "sell" ? "bg-[#805056] text-[#fff]" : ""
                  }`}
                  onClick={() => handleTypeClick("sell")}
                >
                  Mua bán
                </button>
                <button
                  className={`flex w-[120px] items-center justify-center p-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-[#1c1d21] text-sm font-normal ${
                    selectedType === "rent" ? "bg-[#805056] text-[#fff]" : ""
                  }`}
                  onClick={() => handleTypeClick("rent")}
                >
                  Cho thuê
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-10 mb-[30px] ">
            <div className="flex flex-col max-w-[320px] gap-y-[8px]">
              <label className="text-[#111] text-sm font-medium">
                {" "}
                <label className="text-[#f62a19] text-sm font-medium">*</label>
                Loại bất động sản
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-sm font-normal text-[#1c1d21]"
              >
                <option value="0">-- Loại Bất động sản --</option>
                <option value="Căn hộ chung cư">Căn hộ chung cư</option>
                <option value="Nhà riêng">Nhà riêng</option>
                <option value="Nhà mặt phố">Nhà mặt phố</option>
                <option value="Nhà biệt thự, liền kề">Nhà biệt thự, liền kề</option>
                <option value="Đất">Đất</option>
                <option value="Đất nền dự án">Đất nền dự án</option>
                <option value="Trang trại">Trang trại</option>
                <option value="Khu nghỉ dưỡng">Khu nghỉ dưỡng</option>
                <option value="Nhà kho, nhà xưởng">Nhà kho, nhà xưởng</option>
                <option value="Bất động sản khác">Bất động sản khác</option>
              </select>
            </div>
            <div className="flex flex-col max-w-[320px] gap-y-[8px]">
              <label className="text-[#111] text-sm font-medium">
                {" "}
                <label className="text-[#f62a19] text-sm font-medium">*</label>
                Tỉnh/Thành Phố
              </label>
              <select
                value={selectedProvince}
                onChange={(e) => handleProvinceChange(e.target.value)}
                className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#9a9a9a] text-sm font-normal text-[#1c1d21]">
                <option value="">-- Tình/Thành Phố --</option>
                {provinces.length > 0 ? (
                  provinces.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name}
                    </option>
                  ))
                ) : (
                  <option>Loading provinces...</option>
                )}
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-x-10 mb-[30px] ">
            <div className="flex flex-col max-w-[320px] gap-y-[8px]">
              <label className="text-[#111] text-sm font-medium">
                {" "}
                <label className="text-[#f62a19] text-sm font-medium">*</label>
                Quận/Huyện
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#9a9a9a] text-sm font-normal text-[#1c1d21]">
                <option value="">-- Quận/Huyện --</option>
                {districts.map((d) => (
                  <option key={d.code} value={d.code}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col max-w-[320px] gap-y-[8px]">
              <label className="text-[#111] text-sm font-medium">
                {" "}
                <label className="text-[#f62a19] text-sm font-medium">*</label>
                Xã/Phường
              </label>
              <select
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#9a9a9a] text-sm font-normal text-[#1c1d21]"
              >
                <option value="">-- Xã/Phường --</option>
                {wards.map((w) => (
                  <option key={w.code} value={w.code}>
                    {w.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-[8px] mb-[30px]">
            <label className="text-[#111] text-sm font-medium">
              
              <label className="text-[#f62a19] text-sm font-medium">*</label>
              Đường phố
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="w-full inline-flex p-[15px] items-start justify-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
            />
          </div>
          <span className="text-[#F62A19] text-[12px] font-normal italic self-end">
            (*) Thông tin bắt buộc
          </span>
        </div>
        <Map />
      </div>
      <div className="flex flex-row p-[30px]  mb-10 gap-x-10 rounded-2xl border-[0.5px] border-solid border-[#f5f5f5] bg-[#f8f8f8]">
        <div className="flex flex-col">
          <span className="text-[#1c1d21] text-sm font-semibold  mb-[30px]">
            Thông tin mô tả
          </span>
          <div className="flex flex-col  max-w-[687px] ">
            <div className="flex flex-row gap-x-10 mb-[30px] ">
              <div className="flex flex-col max-w-[320px] gap-y-[8px]">
                <label className="text-[#111] text-sm font-medium">
                  {" "}
                  <label className="text-[#f62a19] text-sm font-medium">
                    *
                  </label>{" "}
                  Giá tiền (VNĐ)
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  className="w-[320px] inline-flex p-[15px] items-start justify-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
                />
              </div>
              <div className="flex flex-col max-w-[320px] gap-y-[8px]">
                <label className="text-[#111] text-sm font-medium">
                  {" "}
                  <label className="text-[#f62a19] text-sm font-medium">
                    *
                  </label>{" "}
                Diện tích (m²)
                </label>
                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  type="text"
                  className="w-[320px] inline-flex p-[15px] items-start justify-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-10 mb-[30px] ">
              <div className="flex flex-col max-w-[320px] gap-y-[8px]">
                <label className="text-[#111] text-sm font-medium">
                  Phòng ngủ
                </label>
                <select
                  value={selectedBedroom}
                  onChange={(e) => setSelectedBedroom(e.target.value)}
                  className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-sm font-normal text-[#1c1d21]"
                >
                  <option value="0">-- Chọn số lượng phòng ngủ --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="flex flex-col max-w-[320px] gap-y-[8px]">
                <label className="text-[#111] text-sm font-medium">
                  Phòng tắm
                </label>
                <select
                  value={selectedBathroom}
                  onChange={(e) => setSelectedBathroom(e.target.value)}
                  className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-sm font-normal text-[#1c1d21]"
                >
                  <option value="0">-- Chọn số lượng phòng tắm--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row gap-x-10 mb-[30px] ">
              <div className="flex flex-col max-w-[320px] gap-y-[8px]">
                <label className="text-[#111] text-sm font-medium">
                  Năm xây dựng
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-sm font-normal text-[#1c1d21]"
                >
                  <option value="0">-- Chọn năm xây dựng--</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div className="flex flex-col max-w-[320px] gap-y-[8px]">
                <label className="text-[#111] text-sm font-medium">
                  Bãi đỗ xe
                </label>
                <select
                  value={selectedParkinglot}
                  onChange={(e) => setSelectedParkinglot(e.target.value)}
                  className="w-[320px] flex justify-center p-[15px]  rounded-md border-[0.5px] border-solid border-[#D6D6D6] text-sm font-normal text-[#1c1d21]"
                >
                  <option value="0">-- Chọn số lượng bãi đỗ xe--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col max-w-[687px] gap-y-[10px]">
              <span className="text-[#111] text-sm font-medium">
                Mô tả chi tiết
              </span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả chi tiết về bất động sản..."
                className="w-full inline-flex p-[15px] items-start justify-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
                rows={5}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[476px]">
          <span className="text-[#111] text-sm font-medium mb-2">
            Hình ảnh mô tả
          </span>
          <span className="text-[#000] text-sm font-normal mb-[30px]">
            * Up ít nhất 3 ảnh cho bài đăng để đạt hiệu quả tốt hơn
          </span>
          <span className="text-[#F62A19] text-[12px] font-normal italic self-end">
            (*) Thông tin bắt buộc
          </span>
          <UploadImage onFileChange={handleFileChange} />
        </div>
      </div>
      <button 
      onClick={handlePost}
      className="max-w-[86px] self-end inline-flex py-[10px] mb-20 px-[15px] items-center justify-center rounded-lg bg-[#806056] text-[#fff] text-sm font-medium">
        Đăng tin
      </button>
    </div>
  );
}

export default Post;
