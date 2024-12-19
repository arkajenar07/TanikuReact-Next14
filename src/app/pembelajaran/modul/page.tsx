'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const VideoPage: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [sideMenuClosed, setSideMenuClosed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videos = [
    { id: 1, src: "/jokowinanem.mp4", title: "1. Pendahuluan" },
    { id: 2, src: "/nanemsayur.mp4", title: "2. Alat dan bahan" },
  ];

  const handlePlay = (index: number) => {
    setIsPlaying(true);
    const video = document.getElementById(`video${index}`) as HTMLVideoElement;
    video.setAttribute("controls", "controls");
    video.play();
  };

  const handlePause = (index: number) => {
    setIsPlaying(false);
    const video = document.getElementById(`video${index}`) as HTMLVideoElement;
    video.removeAttribute("controls");
  };

  const handleVideoEnd = (index: number) => {
    setIsPlaying(false);
    setCurrentVideoIndex(index + 1);
  };

  return (
    <div className="">
      <div className="menu-back bg-white flex top-0 z-[2] fixed items-center justify-between w-full h-[149px] px-[82px]">
        <a href="/pembelajaran" className="flex items-center text-black font-raleway font-bold text-[24px] gap-x-[31px]">
          <Image src="/arr-back.svg" width={20} height={520} alt="" className="w-5 h-5" />
          Kembali
        </a>
        <h1 className="text-[24px] font-bold font-raleway">Otomatisasi penyiraman tanaman dengan teknologi IoT</h1>
        <div className="flex items-center space-x-[16px]">
              <Link href="/dashboard" className="text-gray-700 font-medium">Dashboard</Link>
              <button id="all" className="p-[10px]">
                <Image src="/all-dash.svg" alt="Settings Icon" width={20} height={20} />
              </button>
              <Image src="/pp.png" alt="Profile" className="rounded-full" width={60} height={60} />
            </div>
      </div>
      <div className="flex mt-[149px]">
        <div className="video-container w-[1266px]">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-item flex justify-center items-center relative ${
                index === currentVideoIndex ? "" : "hidden"
              }`}
            >
              <video
                id={`video${index}`}
                className="w-[1266px] h-[692px]"
                onEnded={() => handleVideoEnd(index)}
                onPause={() => handlePause(index)}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
              <button
                className="absolute bg-transparent border-none"
                onClick={() => handlePlay(index)}
              >
                <Image src="/video-play.svg" width={100} height={100} alt="Play" />
              </button>
              )}
            </div>
          ))}
          <div className="title mt-16 ml-[82px] mb-[64px]">
            <h1 className="title font-inter font-semibold text-[36px]">1. Persiapan ( Pendahuluan )</h1>
            <p className="mt-[20px] font-inter font-regular text-[18px]">Otomatisasi penyiraman tanaman dengan teknologi IoT</p>
            <div className="mt-[52px] flex items-center gap-x-[50px]">
              <div>
                <h1 className="text-[24px] font-semibold font-inter flex items-center justify-between">4.3 <Image className="mb-[5px]" src="/star.svg" width={24} height={24} alt="star"></Image></h1>
                <p className="font-inter font-medium text-[18px] text-[#7E7E7E]">80 rating</p>
              </div>
              <div>
                <h1 className="text-[24px] font-semibold font-inter">16,325</h1>
                <p className="font-inter font-medium text-[18px] text-[#7E7E7E]">Penonton</p>
              </div>
              <div>
                <h1 className="text-[24px] font-semibold font-inter">18 jam  12 menit</h1>
                <p className="font-inter font-medium text-[18px] text-[#7E7E7E]">Waktu</p>
              </div>
            </div>
            <p className="w-[1063px] mt-[46px] font-inter text-justify text-[18px] text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis eu nulla eu iaculis. Vivamus maximus nulla non orci ornare ultrices. Integer a tincidunt enim. Mauris pellentesque enim finibus urna lacinia, ac molestie neque convallis. Suspendisse bibendum, sapien sed sodales vehicula, dui sapien sagittis sapien, ac luctus ligula leo in velit. Maecenas dolor est, varius elementum massa id, porta pharetra massa. Mauris vestibulum tellus sed nibh gravida, ac feugiat erat efficitur. Pellentesque quis rutrum nisl.</p>
            <h1 className="mt-[51px] font-semibold text-[28px] font-inter text-[#414141]">1. Pengenalan</h1>
            <p className="w-[1063px] mt-[46px] font-inter text-justify text-[18px] text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis eu nulla eu iaculis. Vivamus maximus nulla non orci ornare ultrices. Integer a tincidunt enim. Mauris pellentesque enim finibus urna lacinia, ac molestie neque convallis. Suspendisse bibendum, sapien sed sodales vehicula, dui sapien sagittis sapien, ac luctus ligula leo in velit. Maecenas dolor est, varius elementum massa id, porta pharetra massa. Mauris vestibulum tellus sed nibh gravida, ac feugiat erat efficitur. Pellentesque quis rutrum nisl.</p>
            <p className="w-[1063px] mt-[46px] font-inter text-justify text-[18px] text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis eu nulla eu iaculis. Vivamus maximus nulla non orci ornare ultrices. Integer a tincidunt enim. Mauris pellentesque enim finibus urna lacinia, ac molestie neque convallis. Suspendisse bibendum, sapien sed sodales vehicula, dui sapien sagittis sapien, ac luctus ligula leo in velit. </p>
            <Image src="/petani-uy.png" width={1063} height={489} alt="petani" className="mt-[40px]"></Image>
            <h1 className="mt-[51px] font-semibold text-[28px] font-inter text-[#414141]">2. Tujuan</h1>
            <p className="w-[1063px] mt-[46px] font-inter text-justify text-[18px] text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis eu nulla eu iaculis. Vivamus maximus nulla non orci ornare ultrices. Integer a tincidunt enim. Mauris pellentesque enim finibus urna lacinia, ac molestie neque convallis. Suspendisse bibendum, sapien sed sodales vehicula, dui sapien sagittis sapien, ac luctus ligula leo in velit. Maecenas dolor est, varius elementum massa id, porta pharetra massa. Mauris vestibulum tellus sed nibh gravida, ac feugiat erat efficitur. Pellentesque quis rutrum nisl.</p>
            <p className="w-[1063px] mt-[46px] font-inter text-justify text-[18px] text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis eu nulla eu iaculis. Vivamus maximus nulla non orci ornare ultrices. Integer a tincidunt enim. Mauris pellentesque enim finibus urna lacinia, ac molestie neque convallis. Suspendisse bibendum, sapien sed sodales vehicula, dui sapien sagittis sapien, ac luctus ligula leo in velit. </p>
          </div>
        </div>
        <div className={`sidemenu fixed right-0 transition-transform duration-300 ${sideMenuClosed ? "translate-x-full" : ""}`}>
          <button
            id="close"
            className="absolute w-[117px] h-[55px] mt-[123px] ml-[-117px] bg-white rounded-l-[50px] text-lg font-inter text-[#414141]"
            onClick={() => setSideMenuClosed((prev) => !prev)}
          >
            {sideMenuClosed ? "-->" : "<--"}
          </button>
          <div className="vid-sections">
            <div className="title-and-toggle-container p-12 w-[636px] h-[178px] bg-[#E6F6F1]">
              <div className="title-toggle flex items-center justify-between">
                <h2 className="text-2xl font-bold font-raleway text-[#414141]">Section 1: Persiapan</h2>
                <button className="bg-transparent border-none">
                  <Image src="/all-dash.svg" width={20} height={20} alt="Play" />
                </button>
              </div>
              <p className="mt-5 text-lg font-inter text-[#414141]">4 / 4 jam - 1 jam 10 menit</p>
            </div>
            {videos.map((video, index) => (
              <div key={video.id} className="vid-section p-12 w-[636px] h-[152px] bg-white">
                <div className="checkboxes flex items-center">
                  <input
                    type="checkbox"
                    className="check w-[30px] h-[30px] accent-[#00A876]"
                    id={`checkbox${index}`}
                    checked={index < currentVideoIndex}
                    readOnly
                  />
                  <h2 className="ml-6 text-xl font-bold font-raleway text-[#414141]">{video.title}</h2>
                </div>
                <p className="mt-5 ml-[58px] flex items-center text-lg font-inter text-[#414141] gpa-x-[11px]">
                  <Image src="/video-icon.svg" width={30} height={30} alt="Video" className="mr-1" /> 5 menit
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;