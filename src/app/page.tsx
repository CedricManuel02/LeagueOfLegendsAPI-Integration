import Image from "next/image";
import code from "@/app/assets/image/code-snapshot.png";
import Champions from "./components/Champions";
export default function Home() {
  return (
    <div id="home" className="w-full h-auto">
      <main className="relative bg-[url('https://a-static.besthdwallpaper.com/league-of-legends-lol-squad-wallpaper-5120x2160-41535_16.jpg')] bg-no-repeat bg-cover bg-center h-full w-full before:contents[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-customColor after:contents[''] after:absolute after:w-full after:h-screen after:bottom-0 after:left-0 after:bg-gradient-to-t from-navy-900 via-navy-300 to-transparent">
        <div className="w-full lg:w-10/12 m-auto flex item-center flex-col justify-center h-screen px-5">
          <h1 className="z-10 text-slate-200 text-5xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-7xl">League <span className="font-customFont normal-case">of</span> <br /> Legends</h1>
          <p className="z-10 sm:4/12 md:w-6/12 lg:w-4/12 2xl:w-4/12 text-slate-300 text-base py-5">Wheather you like to dive straight into the fray,
            support your teamates or something in between, there&apos;s a spot for you on the Rift.
          </p>
          <a href="https://signup.leagueoflegends.com/en-ph/signup/redownload" className="btn btn-primary w-44 text-white relative z-10">Download</a>
        </div>
      </main>
      <div id="about" className="w-full h-auto bg-backgroundBlack">
        <div className="hero py-10 w-full lg:w-10/12 m-auto">
          <div className="hero-content flex-col sm:lg:flex-col md:flex-col lg:flex-col xl:flex-row-reverse justify-between gap-10">
            <Image className="w-full sm:w-full md:w-full lg:w-10/12 xl:w-10/12 rounded-md" loading="lazy" src={code} alt="code" />
            <div className="w-full">
              <h1 className="text-4xl font-bold">ADDING <span className="text-red-600">API KEY</span> TO YOUR REQUEST</h1>
              <p className="py-6 text-justify">The League of Legends API provides developers with access to a wealth of data and resources related to the popular multiplayer online battle arena (MOBA) game developed by Riot Games. With this API, developers can retrieve information about champions, items, matches, summoner profiles, and much more.</p>
              <a href="https://developer.riotgames.com/apis" className="btn btn-primary text-white">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <Champions />
    </div>
  );
}

