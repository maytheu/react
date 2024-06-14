"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCouter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} prefix="N" decimal="," />
    </div>
  );
};

export default AnimatedCouter;
