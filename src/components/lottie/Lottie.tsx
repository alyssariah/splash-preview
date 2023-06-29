'use client';
import Lottie from 'lottie-react';

export default function LottieComp({ animationData }: any) {
  return <Lottie animationData={animationData} loop={true} height="100%" width="100%" />;
}
