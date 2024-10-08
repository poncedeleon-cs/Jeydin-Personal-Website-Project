import MainLayout from "../components/layout/MainLayout";
import ButtonsContainer from "../components/landing/ButtonsContainer";

function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen justify-center text-center space-y-5">
        <div className="text-light-text dark:text-dark-text font-semibold text-4xl sm:text-7xl">Hello, I&apos;m Jeydin!</div>
        <div className="text-light-text dark:text-dark-text font-extralight text-xl sm:text-3xl">Student | Anime Enjoyer | Linux Enthusiast</div>
        <ButtonsContainer />
      </div>
    </MainLayout>
  );
}

export default Home;