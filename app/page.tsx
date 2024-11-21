import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="mx-auto w-[90%] bg-[url(../public/hero-img.webp)] bg-no-repeat bg-center bg-cover rounded-3xl h-[20rem] mb-6 mt-9 hover:w-[95%] transition-all"></div>
      {/* hero */}

      {/* main card */}
      <div className="mx-auto w-[90%]">
        {/* our story */}
        <div className="w-full border-y border-solid border-black grid grid-cols-5">
          <div className="text-black col-span-1 flex justify-center items-center text-center text-2xl">
            about our story
          </div>

          <div className="text-black col-span-4 flex justify-center items-center text-center p-[2rem] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eveniet error ad reprehenderit accusamus! Suscipit deserunt
            consequatur veritatis eius libero. Tenetur ducimus quos blanditiis
            aliquid. Ut debitis exercitationem nemo doloremque!
          </div>
        </div>
        {/* our story */}

        {/* lists */}
        <div className="w-full mx-auto min-h-[12rem] pt-[2rem] pb-[2rem] px-[6rem] flex justify-center flex-wrap items-center gap-x-3 gap-y-3 border-b border-solid border-black">
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            specials
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            super market
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            gift card
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            best selling
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            best offers
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            any question?
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            sell with us!
          </div>
          <div className="min-w-[7rem] min-h-[3rem] rounded-xl border border-solid border-black hover:bg-black hover:text-[#ece2d0] flex justify-center items-center text-center transition-all">
            profile
          </div>
        </div>
        {/* lists */}

        {/* news */}
        <div className="w-full min-h-[30rem] grid grid-cols-2 gap-x-8 mt-[3rem] responsive-grid">
          <div className="responsive w-full h-full border border-solid border-black rounded-3xl bg-[url(../public/news.webp)] bg-center bg-cover bg-no-repeat "></div>
          <div className="w-full h-full border border-solid border-black rounded-3xl text-center flex justify-center items-center p-[2rem] leading-9 text-lg overflow-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iste, sint delectus illum similique quae repellat dignissimos
            eligendi vitae sequi temporibus corporis laboriosam et voluptatum
            architecto sed iure unde animi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Molestias necessitatibus, et quisquam
            magnam fugit corporis vero, iste tempora tempore repellat vel quasi
            voluptas quis fugiat? Veritatis cupiditate soluta enim cumque.
          </div>
        </div>
        <div className="w-[20%] mx-auto flex justify-evenly items-center mt-[1rem]">
          <div className="text-[2.5rem] w-[4rem] h-auto flex justify-center items-center flex-col rounded-full transition-all hover:bg-black hover:text-[#ece2d0]">
            &#10523;
          </div>
          <div className="text-[2.5rem] w-[4rem] h-auto flex justify-center items-center flex-col rounded-full transition-all hover:bg-black hover:text-[#ece2d0]">
            &#10524;
          </div>
        </div>
        {/* news */}

        {/* offers */}
        <div className="w-full min-h-[25rem] max-h-[26rem] mt-[1.5rem] border-t border-b border-solid border-black flex justify-start p-1 gap-4 items-center overflow-x-scroll dotted scrollbar-thin">
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center text-2xl bg-[#ece2d0]">
            offers
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
          <div className="min-w-[11rem] h-[20rem] rounded-3xl border border-solid border-black flex justify-center items-center p-4 text-center bg-[#ece2d0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aut cupiditate, ex eius iste vero in quidem minus soluta deserunt.
            Explicabo voluptate corporis tenetur laborum provident quam veniam
            dolorum corrupti?
          </div>
        </div>
        {/* offers */}

        {/* spitials */}
        <div className="w-full h-[6.1rem] p-2 mt-[3rem] text-3xl bg-black rounded-xl flex justify-center items-center dotted2 text-[#ece2d0] responsive-text-size-offers">
          <div className="mr-4 text-[2.5rem]">&#10523;</div>
          <div>all of our specials offers</div>
          <div className="ml-4 text-[2.5rem]">&#10524;</div>
        </div>
        {/* spitials */}

        {/* spitials items */}
        <div className="w-full flex justify-center items-center flex-wrap gap-8 mt-[1.5rem] border-b border-solid border-black pb-8">
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
          <div className="w-[12rem] h-[12rem] rounded-3xl border border-solid border-black cursor-pointer flex justify-center items-center hover:bg-black hover:text-[#ece2d0] transition-all text-xl">
            box
          </div>
        </div>
        {/* spitials items */}

        {/* to read */}
        <div className="w-full text-3xl text-black p-4 mt-[3rem]">to read</div>
        <div className="w-full min-h-[25rem] flex justify-start items-center overflow-x-auto scrollbar-thin gap-5 mt-1 p-4 dotted border-b border-t border-solid border-black">
          <div className="min-w-[25rem] h-[19rem] border border-solid rounded-3xl border-black flex justify-center items-center bg-black opacity-90 text-[#ece2d0] p-4 text-center leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iure architecto quo adipisci deserunt amet nulla quidem dolorum
            impedit iusto? Officia veniam possimus placeat consequatur illum
            praesentium debitis excepturi repudiandae?
          </div>
          <div className="min-w-[25rem] h-[19rem] border border-solid rounded-3xl border-black flex justify-center items-center bg-black opacity-90 text-[#ece2d0] p-4 text-center leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iure architecto quo adipisci deserunt amet nulla quidem dolorum
            impedit iusto? Officia veniam possimus placeat consequatur illum
            praesentium debitis excepturi repudiandae?
          </div>
          <div className="min-w-[25rem] h-[19rem] border border-solid rounded-3xl border-black flex justify-center items-center bg-black opacity-90 text-[#ece2d0] p-4 text-center leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iure architecto quo adipisci deserunt amet nulla quidem dolorum
            impedit iusto? Officia veniam possimus placeat consequatur illum
            praesentium debitis excepturi repudiandae?
          </div>
          <div className="min-w-[25rem] h-[19rem] border border-solid rounded-3xl border-black flex justify-center items-center bg-black opacity-90 text-[#ece2d0] p-4 text-center leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iure architecto quo adipisci deserunt amet nulla quidem dolorum
            impedit iusto? Officia veniam possimus placeat consequatur illum
            praesentium debitis excepturi repudiandae?
          </div>
          <div className="min-w-[25rem] h-[19rem] border border-solid rounded-3xl border-black flex justify-center items-center bg-black opacity-90 text-[#ece2d0] p-4 text-center leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iure architecto quo adipisci deserunt amet nulla quidem dolorum
            impedit iusto? Officia veniam possimus placeat consequatur illum
            praesentium debitis excepturi repudiandae?
          </div>
        </div>
        {/* to read */}
        <Link href={"/"}>
          <div className="w-[5rem] h-[2.5rem] bg-black mx-auto mt-5 mb-5 text-3xl text-[#ece2d0] flex justify-center items-center rounded-full font-thin hover:bg-[#ece2d0] hover:text-black transition-all border border-solid border-blsck">
            &uarr;
          </div>
        </Link>
      </div>
      {/* main card */}
    </>
  );
}
