import TalkBg from "../assets/talk-to-sales-N2GDBAGC.svg";

export default function CallToAction() {
  return (
    <div className="py-12 sm:py-24">
      <div
        className="container mx-auto px-4 sm:px-6 rounded-3xl p-8 sm:p-16"
        style={{
          backgroundImage: `url(${TalkBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#e2f7e3",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            {/* left side */}
          <div className="w-full sm:w-1/2">
            <p className="text-xl sm:text-2xl font-bold text-[#1f6b45] text-center sm:text-left">
              Are you a large business looking for custom solutions?
            </p>
          </div>
          {/* right side */}
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <button className="w-full sm:w-auto bg-white text-[#353a47] border border-color-[#c2c2c2] shadow-[#00c3603d] px-6 py-3 rounded-sm">
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
