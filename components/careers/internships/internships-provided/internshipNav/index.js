const InternshipNav = ({ router, path }) => {
  console.log("PathName", path);
  return (
    <div className="flex justify-center pt-10 md:justify-normal">
      <div className="inline-flex gap-1 p-1 text-lg font-semibold border-2 rounded-lg font-openSans">
        <button
          onClick={() => router.push("/careers/internships")}
          className={`px-6 py-2 rounded-md ${
            path.endsWith("internships")
              ? "bg-[#003366] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
        >
          All
        </button>
        <button
          className={`px-6 py-2 rounded-md ${
            path.endsWith("niti")
              ? "bg-[#003366] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => router.push("/careers/internships/niti?scroll=niti")}
        >
          NITI
        </button>
        <button
          className={`px-4 py-[0.5rem] rounded-md ${
            path.endsWith("vidhi")
              ? "bg-[#003366] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => router.push("/careers/internships/vidhi?scroll=vidhi")}
        >
          VIDHI
        </button>
      </div>
    </div>
  );
};

export default InternshipNav;
