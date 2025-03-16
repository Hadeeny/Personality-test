"use client";
import React, { useState } from "react";
import { RadioGroupForm } from "./my-form";
import { Button } from "./ui/button";
import { z } from "zod";

const Multiform = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const formData = [
    {
        label: 'Notify me about...',
        name: 'first',
        options: ['All new messages', 'Direct messages and mentions', 'Nothing']
    },
    {
        label: 'Do not notify me about...',
        name: 'second',
        options: ['Hydrogen', 'Helium', 'Lithium']
    },
    {
      label: 'Sometimes notify me about...',
      name: 'third',
      options: ['Hydrogen', 'Helium', 'Lithium']
  },
  {
    label: 'Do not notify me about...',
    name: 'fourth',
    options: ['Hydrogen', 'Helium', 'Lithium']
}
  ];

  // const FormSchema = z.object({
  //   type: z.enum([''], {
  //     required_error: "You need to select a notification type.",
  //   }),
  // });

  const handleNext = () => {
    if (currentItem <= formData.length - 1) {
      setCurrentItem(currentItem + 1);
    } else return;
  };

  const currentFormData = formData[currentItem]
  return (
    <div>
      {/* <RadioGroupForm onNextHandler={handleNext} currentFormData={currentFormData} /> */}
      <RadioGroupForm />
    </div>
  );
};

export default Multiform;
