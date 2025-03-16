"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {useRouter} from 'next/navigation'

// import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormStep,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { currentFormDataType } from "@/lib/types";
import {questions} from '@/lib/questions'
import { useStore } from "@/store";


export type FormData = {
  step: number;
} & Record<`quiz${number}`, string>

export function RadioGroupForm() {

  const router = useRouter()
  const maxSteps = questions.length;

  const setResults = useStore(store=> store.setResults)

  const colors = ['red', 'yellow', 'green', 'blue'] as const

  const firstStepSchema = z.object({
    step: z.literal(1),
    quiz1: z.enum(colors),
  });

  const secondStepSchema = firstStepSchema.extend({
    step: z.literal(2),
    quiz2: z.enum(colors),
  });


  const thirdStepSchema = secondStepSchema.extend({
    step: z.literal(3),
    quiz3: z.enum(colors),
  });

  const fourthStepSchema = thirdStepSchema.extend({
    step: z.literal(4),
    quiz4: z.enum(colors),
  });

  const fifthStepSchema = fourthStepSchema.extend({
    step: z.literal(5),
    quiz5: z.enum(colors),
  });

  const sixthStepSchema = fifthStepSchema.extend({
    step: z.literal(6),
    quiz6: z.enum(colors),
  });

  const seventhStepSchema = sixthStepSchema.extend({
    step: z.literal(7),
    quiz7: z.enum(colors),
  });

  const eightStepSchema = seventhStepSchema.extend({
    step: z.literal(8),
    quiz8: z.enum(colors),
  });

  const ninethStepSchema = eightStepSchema.extend({
    step: z.literal(9),
    quiz9: z.enum(colors),
  });

  const tenthStepSchema = ninethStepSchema.extend({
    step: z.literal(10),
    quiz10: z.enum(colors),
  });

  const schema = z.discriminatedUnion("step", [
    firstStepSchema,
    secondStepSchema,
    thirdStepSchema,
    fourthStepSchema,
    fifthStepSchema,
    sixthStepSchema,
    seventhStepSchema,
    eightStepSchema, 
    ninethStepSchema,
    tenthStepSchema  
  ]);

  const form = useForm<FormData>({
    mode: "all",
    shouldFocusError: false,
    resolver: zodResolver(schema),
    defaultValues: {
      step: 1
    }
  });

  const step = form.watch("step");

  function onSubmit(values: FormData) {
    setResults(values)
    router.push('/result')

  }

  const prevStep = () => {
    if (step > 1) {
      form.setValue("step", step - 1, { shouldValidate: true });
    }
  };

  const nextStep = () => {
    if (step < maxSteps) {
      form.setValue("step", step + 1, { shouldValidate: true });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-2/3 space-y-6">
        
        {questions.map((question, index)=>(
          <FormStep
          key={index}
          step={index + 1}
          currentStep={step}
          title=""
          description={`${index + 1}/${questions.length}`}
          onPrevStepClick={prevStep}
        >
          <FormField
            control={form.control}
            name={`quiz${index + 1}`}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-4xl text-white">{question.question}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {question.options.map((option, i)=>(
                      <FormItem key={i} className="flex  items-center space-x-3 space-y-0">
                      <FormControl className="">
                        <RadioGroupItem className="[&_svg]:fill-black bg-slate-300 text-white" value={option.color} />
                      </FormControl>
                      <FormLabel className="font-normal text-xl">{option.text}</FormLabel>
                    </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormStep>
        ))}
        <Button
          key={step === maxSteps ? "submit-btn" : "next-step-btn"}
          type={step === maxSteps ? "submit" : "button"}
          className="w-full bg-white text-black uppercase hover:bg-white/90"
          disabled={!form.formState.isValid}
          onClick={step === maxSteps ? undefined : nextStep}
        >
          {step === maxSteps ? "Submit" : "Next question"}
        </Button>
      </form>
    </Form>
  );
}

