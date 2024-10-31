"use client";
import Head from "next/head";

export default function Home() {
  const handleRunGame = () => {
    // 在新窗口打开游戏页面
    window.open("/game/game.html", "_blank", "fullscreen=yes");
  };

  return (
    <>
      <Head>
        <title>Dream & Demon</title>
        <meta name="description" content="A roguelike adventure game" />
      </Head>

      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-center mb-6 text-purple-400">
            Dream & Demon
          </h1>

          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Embark on an epic journey through endless waves of demons in this
              thrilling roguelike adventure. Harness the power of 20+ unique
              weapons and abilities as you fight your way through hordes of
              monsters, growing stronger with each victory. Will you survive
              long enough to face the ultimate challenge and become a legend?
            </p>
            <button
              onClick={handleRunGame}
              className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-colors duration-200"
            >
              Run Game
            </button>
          </div>
        </div>

        <div className="relative w-full flex justify-center mb-12">
          <div className="w-[960px] relative">
            <img
              src="/game/asset.jpg"
              alt="Game Preview"
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2">
              Click "Run Game" to start playing. For the best experience, please
              play in fullscreen mode.
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="container mx-auto px-4 py-12 relative z-10 bg-gray-900">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300">
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>20+ upgradeable weapons and abilities</li>
                <li>4 unique enemy types and 2 bosses</li>
                <li>Object pools for optimal performance</li>
                <li>Infinite background shader</li>
                <li>Mobile, gamepad, and keyboard input support</li>
              </ul>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Enemy spawn chance/rate keyframe system</li>
                <li>ScriptableObjects for character and level design</li>
                <li>Level up system</li>
                <li>Mandarin localization</li>
              </ul>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
              Description
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                During a 3 month internship at Gamania in Taiwan I was asked to
                create a mobile game inspired by one of the most popular indie
                games of the year, Vampire Survivors.
              </p>
              <p>
                More specifically, I was tasked with creating a game in which
                the player fights off hordes of increasingly difficult monsters
                using a collection of random, automatically attacking,
                upgradeable weapons and abilities. This involved creating a
                basic player controller, a level up system, various enemy types,
                and a whole bunch of unique items and abilities for the player
                to use.
              </p>
              <p>
                The game is split into quick, 10 minute levels that are
                completed by surviving to the end of the level and defeating the
                final boss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
