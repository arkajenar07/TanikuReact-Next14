'use client';
import { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Input } from '@/components/input/Input';
import { Button } from '@/components/button/Button';
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState(''); // State untuk username
  const [password, setPassword] = useState(''); // State untuk password
  const router = useRouter();

  const handleLogin =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah halaman refresh
    if (username === 'ajm@gmail.com' && password === 'password') {
      router.push('/pembelajaran'); // Navigasi ke halaman /pembelajaran
    } else {
      alert('Username atau password salah!'); // Tampilkan pesan error
    }
  };

  return (
    <div className="flex">
      <div className="log-img flex flex-col items-start w-[695px] h-[100vh] overflow-hidden bg-no-repeat text-white relative">
        <Image className="w-[695px]" src="/login-img.png" width={695} height={1080} alt=""/>
        <div className="absolute pl-[103px] pt-[72px] space-y-[240px]">
          <Link href="/" className="">
            <Image src="/logo-white.png" alt="Logo" width={175} height={36}/>
          </Link>
          <h1 className="text-[89px] font-bold font-inter leading-[108px]">
            Selamat 
            Datang 
            Kembali
          </h1>
        </div>
      </div>
      <div className="text-content flex justify-center flex-grow items-center">
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-[32px]">
            <Image src="/arr-back.svg" width={21} height={21} alt=""/>
          </Link>
          <h1 className="text-[40px] font-bold font-raleway text-gray-800">
            Masukkan Data Login Anda
          </h1>
          <h3 className="text-[20px] font-semibold font-inter text-gray-500 mt-3">
            Masuk ke akunmu
          </h3>
          <form onSubmit={handleLogin} className="mt-10">
            <div className="username flex flex-col space-y-[20px]">
              <label className="text-[24px] font-semibold font-raleway text-gray-800">Username</label>
              <Input
                placeholder="Enter text here"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update state username
              />
            </div>
            <div className="password flex flex-col mt-6 space-y-[20px]">
              <label className="text-[24px] font-semibold font-inter text-gray-800">Password</label>
              <Input
                placeholder="Enter text here"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state password
              />
            </div>
            <div className="mt-[40px]">
              <Button
                label="Login"
                primary
                size="large"
              />
            </div>
          </form>

          <h4 className="text-center w-full mt-8 text-[18px] font-inter text-gray-500">
            Belum punya akun?
            <a href="/login" className="hover:underline text-[#00A876]"> Daftar</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
