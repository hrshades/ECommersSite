export default function Footer() {
  return (
    <footer className="w-[90%] mx-auto min-h-[20rem] bg-black opacity-90 mt-[3rem] rounded-3xl shadow-2xl text-[#ece2d0] grid grid-cols-3 gap-4 p-[3rem] responsive-grid-col responsive-text-size">
      <div className="w-full h-full border border-solid border-[#ece2d0] rounded-3xl flex justify-center flex-col items-center text-3xl p-4 hover:bg-[#87847f] hover:text-black transition-all hover:border-none">
        <div>
          <span className="text-5xl">&#8460;</span>ermes shop
        </div>
        <div className="text-sm mt-8">&copy; 2023 All Rights Reserved.</div>
      </div>

      <div className="w-full h-full border border-solid border-[#ece2d0] rounded-3xl flex justify-center flex-col items-center gap-y-6 p-8 text-center hover:bg-[#87847f] hover:text-black transition-all hover:border-none">
        <div className="cursor-pointer underline">
          download the hermes shop application
        </div>
        <div className="cursor-pointer underline">need any help to shop?</div>
        <div className="cursor-pointer underline">
          be updated by giving us your email!
        </div>
        <div className="cursor-pointer underline">fallow us on instagram!</div>
      </div>

      <div className="w-full h-full border border-solid border-[#ece2d0] rounded-3xl flex justify-center items-center p-8 text-center leading-6 hover:bg-[#87847f] hover:text-black transition-all hover:border-none">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
        reiciendis, odio obcaecati nisi laudantium fuga consectetur ratione ut,
        ex mollitia modi nulla quaerat nesciunt provident numquam eum rerum
        cumque accusantium.
      </div>
    </footer>
  );
}
