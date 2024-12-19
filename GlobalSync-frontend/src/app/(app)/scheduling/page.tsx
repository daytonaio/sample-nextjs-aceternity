"use client";
import BottomGradient from "@/components/ui/BottomGradient";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

// Reusable LabelInputContainer Component
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-around items-center space-y-2 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default function Scheduling() {
  const [result, setResult] = useState<{
    participants: { id: number; name: string; timezone: string }[];
    utcTime: string;
    compatibilityScore: number;
    localTimes: { id: number; time: string }[];
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mockResult = {
      participants: [
        { id: 2, name: "Emily Johnson", timezone: "US/Eastern" },
        { id: 3, name: "Hiroshi Tanaka", timezone: "Asia/Tokyo" },
        { id: 5, name: "Mohim Al-Fayed", timezone: "Asia/Dubai" },
        { id: 7, name: "Chen Wei", timezone: "Asia/Singapore" },
      ],
      utcTime: "2024-11-30 08:00 UTC",
      compatibilityScore: 0.5,
      localTimes: [
        { id: 2, time: "2024-11-30 03:00 EST" },
        { id: 3, time: "2024-11-30 17:00 JST" },
        { id: 5, time: "2024-11-30 12:00 +04" },
        { id: 7, time: "2024-11-30 16:00 +08" },
      ],
    };
    setResult(mockResult);
  };

  return (
    <div className="flex flex-1">
      <div className="p-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-4 flex-1 w-full h-full">
        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          Meeting Scheduler
        </h1>

        <div className="flex justify-around items-center">
          {/* Form */}
          <div className="max-w-md w-full mx-auto rounded-md p-4 md:p-8 shadow-input bg-white dark:bg-black border border-slate-700">
            <form className="my-8" onSubmit={handleSubmit}>
              {/* Team Member IDs */}
              <LabelInputContainer className="mb-4">
                <Label htmlFor="teamMemberIds">Team Member IDs</Label>
                <Input
                  id="teamMemberIds"
                  placeholder="IDs (comma-separated)"
                  type="text"
                />
              </LabelInputContainer>

              {/* Meeting Duration */}
              <LabelInputContainer className="mb-4">
                <Label htmlFor="meetingDuration">
                  Meeting Duration <br /> (in minutes)
                </Label>
                <Input
                  id="meetingDuration"
                  placeholder="e.g. 60"
                  type="number"
                />
              </LabelInputContainer>

              {/* Preferred Time Range */}
              <LabelInputContainer className="mb-8">
                <Label htmlFor="preferredTimeRange">Preferred Time Range</Label>
                <Input
                  id="preferredTimeRange"
                  placeholder="e.g., 8&#8208;15"
                  type="text"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-cyan-900 dark:via-neutral-900 dark:to-blue-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Schedule Meet &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* Results Section */}
          {result && (
            <Button className="flex flex-col w-auto p-4">
              <h2 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-4">
                Optimal Meeting Time
              </h2>
              <p className="text-sm">UTC Time: {result.utcTime}</p>
              <p className="text-sm">
                Compatibility Score: {result.compatibilityScore}
              </p>
              <h3 className="font-bold text-md mt-4 text-neutral-800 dark:text-neutral-200">
                Selected Participants:
              </h3>
              <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-400">
                {result.participants.map((participant) => (
                  <p key={participant.id}>
                    ID: {participant.id} – {participant.name} (
                    {participant.timezone})
                  </p>
                ))}
              </ul>
              <h3 className="font-bold text-md mt-4 text-neutral-800 dark:text-neutral-200">
                Local Times for Participants:
              </h3>
              <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-400">
                {result.localTimes.map((time) => (
                  <p key={time.id}>
                    Employee {time.id}: {time.time}
                  </p>
                ))}
              </ul>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
