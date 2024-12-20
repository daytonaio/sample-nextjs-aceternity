"use client";

const Dashboard = () => {
  const stats = [
    { label: "Team Members", value: "3" },
    { label: "Time Zones", value: "3" },
    { label: "Avg. Productivity", value: "85%" },
    { label: "CO₂ Saved", value: "125 kg" },
  ];
  const members = [
    { label: "Sarah Johnson", status: "online", timezone: "PST" },
    { label: "Raj Patel", status: "busy", timezone: "IST" },
    { label: "Emma Schmid", status: "away", timezone: "CET" },
  ];

  return (
    <>
    <div className="p-4 m-4 rounded-tl-full bg-white">Hello</div>
    </>
    // <>
    //   <div className="p-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
    //     {/* Header */}
    //     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:w-full mb-6">
    //       <h1 className="text-2xl sm:text-4xl">Dashboard</h1>
    //       <button className="p-[3px] relative mt-4 sm:mt-0">
    //         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
    //         <div className="px-4 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
    //           Schedule Meet
    //         </div>
    //       </button>
    //     </div>

    //     {/* Flex Layout */}
    //     <div className="flex gap-6">
    //       {/* Global Team Overview */}
    //       <div className="flex bg-neutral-800 backdrop-blur-lg border border-neutral-600 rounded-lg p-4">
    //         <h1 className="text-xl sm:text-2xl text-center mb-4">
    //           🌐 Global Team Overview
    //         </h1>
    //         <div className="flex flex-wrap gap-4 justify-center items-center6">
    //           {stats.map((stat, index) => (
    //             <div
    //               key={index}
    //               className="flex sm:flex-none min-w-[120px] bg-neutral-600 rounded-lg p-4 text-center"
    //             >
    //               <p>{stat.label}:</p>
    //               <p className="font-bold">{stat.value}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Team Availability */}
    //       <div className="flex lg:max-w-sm bg-neutral-800 backdrop-blur-lg border border-neutral-600 rounded-lg p-4">
    //         <h1 className="text-lg sm:text-xl text-center mb-4">
    //           Team Availability
    //         </h1>
    //         <div className="flex flex-col gap-4">
    //           {members.map((member, index) => (
    //             <div
    //               key={index}
    //               className="bg-neutral-600 rounded-lg p-4"
    //             >
    //               <p>{member.label}:</p>
    //               <div className="flex justify-between items-center text-sm">
    //                 <p className="text-neutral-400">{member.timezone}</p>
    //                 <p>{member.status}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Dashboard;
