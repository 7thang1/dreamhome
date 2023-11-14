import React from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
function Signup({onSignInClick }) {
  return (
    <Card className='flex flex-col w-[497px] h-[641px] items-center bg-white rounded-2xl px-[58px]'>
    <div className="font-semibold text-lg  flex flex-col justify-self-center w-fit mt-[45px] ">
      <img src="/logo1.png" alt="DreamHome" className='w-[54px] h-[25px]' />
      <span className='capitalize text-transparent bg-gradient-to-t from-[#7A5F61] to-[#C28653] bg-clip-text'>Dream Home</span>
    </div>
    <p className='text-[#000] text-sm font-normal mt-[10px]'>Vui lòng điền thông tin bên dưới</p>
    <div className='mt-[30px] shrink-0 flex flex-col gap-2 w-[380px]  '>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Họ và tên
        </Typography>
        <Input type='text' label='Nhập họ và tên của bạn' className='mb-2 w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Email
        </Typography>
        <Input type='email' label='Nhập email của bạn' className='mb-2 w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Mật khẩu
        </Typography>
        <Input type='password' label='Nhập mật khẩu của bạn' className='mb-2 w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Xác nhận mật khẩu
        </Typography>
        <Input type='password' label='Nhập lại mật khẩu của bạn' className='w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
            <Button className='mt-[22px] inline-flex px-5 py-[15px] justify-center items-center gap-[10px] bg-[#806056]'>Tạo tài khoản</Button>
            <div className='flex justify-center gap-[5px] mt-3'>
            <Typography className='text-sm font-normal text-[#1c1d21]'>Bạn đã có tài khoản?</Typography>
            <Typography 
            as="a" 
            onClick={onSignInClick}
            className='cursor-pointer text-sm font-normal text-[#806056]'>Đăng nhập</Typography>
            </div>

    </div>
</Card>
  )
}

export default Signup;