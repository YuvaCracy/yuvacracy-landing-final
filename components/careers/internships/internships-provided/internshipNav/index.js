const InternshipNav = ({ router, path }) => {
    return (
      <div className="pt-10">
        <div className="inline-flex p-1 font-openSans text-lg font-semibold gap-1 border-2 rounded-lg">
          <button
            onClick={() => router.push("/careers/internships")}
            className={`px-6 py-2 rounded-md ${
              (path.endsWith("internships"))
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
            onClick={() => router.push("/careers/internships/niti")}
          >
            NITI
          </button>
          <button
            className={`px-4 py-[0.5rem] rounded-md ${
              path.endsWith("vidhi")
                ? "bg-[#003366] text-white"
                : "bg-[#f8f8f8] text-black"
            }`}
            onClick={() => router.push("/careers/internships/vidhi")}
          >
            VIDHI
          </button>
        </div>
      </div>
    );
  };

export default InternshipNav;