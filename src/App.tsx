import facebookIcon from "./assets/icon-facebook.svg"
import instIcon from "./assets/icon-instagram.svg"
import twitterIcon from "./assets/icon-twitter.svg"
import workItLogoDark from "./assets/logo-dark.svg"
import workItLogoLight from "./assets/logo-light.svg"

function App() {
  return (
    <>
      <div
        className="u-wrapper u-wrapper--rounded-bottom u-wrapper--rounded-bottom-dark
        u-dark-bg"
      >
        <div className="c-s-welcome-screen min-h-[400px] md:min-h-[480px] lg:min-h-[650px]">
          <header className="relative">
            <div className="u-container">
              <nav className="pt-9 pb-16">
                <ul className="flex flex-row justify-between items-center">
                  <li>
                    <img
                      src={workItLogoLight}
                      width="97"
                      height="26"
                      alt="Workit logo"
                    />
                  </li>
                  <li>
                    <button className="c-button-ordinary">
                      Apply for access
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="u-wrapper u-dark-bg c-s-promo">
            <div className="flex flex-col items-center">
              <div className="pb-10">
                <p className="text-[50px] leading-none font-semibold font-fraunces text-center">
                  Data{" "}
                  <span className="border-b-eucalyptus border-b-2">
                    tailored
                  </span>{" "}
                  to
                  <br /> your needs.
                </p>
              </div>
              <div className="pb-10">
                <a href="#" className="c-button-ordinary">
                  Learn more
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="relative bg-white">
        <h1 className="u-visually-hidden">Work It</h1>
        <div className="u-wrapper u-wrapper--rounded-bottom u-wrapper--rounded-bottom-light mb-[5rem]">
          <section className="u-wrapper u-light-bg pt-32 pb-8 md:pt-44">
            <div className="u-container">
              <div className="pt-16 lg:pt-22 lg:pb-36 md:max-w-[573px] md:m-auto lg:max-w-[1114px]">
                <ul className="c-advantages-list">
                  <li className="flex flex-col items-center mb-10 md:items-start md:flex-row lg:flex-col lg:w-[calc(100%_/_3)] lg:items-center lg:mr-6 lg:mb-0">
                    <div className="flex flex-col items-center md:items-start md:pl-8 lg:pl-0 lg:items-center">
                      <p className="font-fraunces text-[28px] font-bold mb-4">
                        Actionable insights
                      </p>
                      <p className="text-center md:text-start lg:text-center">
                        Optimize your products, improve customer satisfaction
                        and stay ahead of the competition with our product data
                        analytics.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center mb-10 md:flex-row md:items-start lg:flex-col lg:w-[calc(100%_/_3)] lg:items-center lg:mr-6 lg:mb-0">
                    <div className="flex flex-col items-center md:items-start md:pl-8 lg:pl-0 lg:items-center">
                      <p className="font-fraunces text-[28px] font-bold mb-4">
                        Data-driven decisions
                      </p>
                      <p className="text-center md:text-start lg:text-center">
                        Make data-driven decisions with our product data
                        analytics. Our AI-generated reports help you unlock
                        insights hidden in your product data.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center md:items-start md:flex-row lg:w-[calc(100%_/_3)] lg:flex-col lg:items-center">
                    <div className="flex flex-col items-center md:items-start md:pl-8 lg:pl-0 lg:items-center">
                      <p className="font-fraunces text-[28px] font-bold mb-4">
                        Always affordable
                      </p>
                      <p className="text-center md:text-start lg:text-center">
                        Always affordable pricing that scales with your
                        business. Get top-quality product data analytics
                        services without hidden costs or unexpected fees.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="u-container pt-12 pb-10 md:pt-10 lg:pt-20 lg:pb-20">
          <section className="u-wrapper c-s-founder">
            <div
              className="u-dark-bg flex flex-col items-center pt-6 pb-6 pl-9 pr-9
              md:w-[514px] md:items-start md:pl-14 md:pr-14 md:pt-12 md:pb-12
              lg:w-[730px] lg:pl-20"
            >
              <p className="font-fraunces text-3xl mb-4 md:text-4xl md:mb-6 lg:text-6xl">
                Be the first to test
              </p>
              <p className="mb-4 text-center md:text-left md:mb-6">
                Hi, I'm Louis Graham, the founder of the company. Book a demo
                call with me to become a beta tester for our app and kickstart
                your company. Apply for access below and I’ll be in touch to
                schedule a call.
              </p>
              <button className="c-button-ordinary">Apply for access</button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white pt-12 pb-12">
        <div className="u-container flex flex-col items-center">
          <img
            src={workItLogoDark}
            className="mb-9"
            width="96"
            height="25"
            alt="Workit logo"
          />
          <ul className="inline-flex gap-6">
            <li>
              <a href="#" className="cursor-pointer">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <img src={instIcon} alt="Instagram icon" />
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
