function App() {
  return (
    <>
      <header className="header dark-bg">
        <div className="container pb-32">
          <div className="flex flex-row justify-between items-center h-[100px]">
            <img
              src="src/assets/images/logo-light.svg"
              width="97"
              height="26"
              alt="Workit logo"
            />
            <button className="button-secondary">Apply for access</button>
          </div>
          <div className="flex flex-col items-center pt-[18px]">
            <p className="text-[50px] line-height-n font-semibold text-center font-fraunces">
              Data tailored to your needs.
            </p>
            <button className="button-ordinary w-[133px] mt-10">
              Learn more
            </button>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <h1 className="visually-hidden text-gray-600">Work It</h1>
        <section className="light-bg">
          <div className="container pt-40 pb-20">
            <ul className="my-list">
              <li className="flex flex-col items-center mb-10">
                <p className="font-fraunces text-3xl mb-4">
                  Actionable insights
                </p>
                <p className="text-center">
                  Optimize your products, improve customer satisfaction and stay
                  ahead of the competition with our product data analytics.
                </p>
              </li>
              <li className="flex flex-col items-center mb-10">
                <p className="font-fraunces text-3xl mb-4">
                  Data-driven decisions
                </p>
                <p className="text-center">
                  Make data-driven decisions with our product data analytics.
                  Our AI-generated reports help you unlock insights hidden in
                  your product data.
                </p>
              </li>
              <li className="flex flex-col items-center mb-10">
                <p className="font-fraunces text-3xl mb-4">Always affordable</p>
                <p className="text-center">
                  Always affordable pricing that scales with your business. Get
                  top-quality product data analytics services without hidden
                  costs or unexpected fees.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className="container">
          <section className="founder-section">
            <div className="dark-bg flex flex-col items-center pt-6 pb-6 pl-9 pr-9">
              <p className="font-fraunces text-3xl mb-4">
                Be the first to test
              </p>
              <p className="text-center mb-4">
                Hi, I'm Louis Graham, the founder of the company. Book a demo
                call with me to become a beta tester for our app and kickstart
                your company. Apply for access below and I’ll be in touch to
                schedule a call.
              </p>
              <button className="button-ordinary w-[153px]">
                Apply for access
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white pt-12 pb-12">
        <div className="container flex flex-col items-center">
          <img
            className="mb-9"
            src="src/assets/images/logo-dark.svg"
            width="96"
            height="25"
            alt="Workit logo"
          />
          <ul className="inline-flex gap-6">
            <li>
              <a>
                <img src="src/assets/images/icon-facebook.svg" />
              </a>
            </li>
            <li>
              <a>
                <img src="src/assets/images/icon-instagram.svg" />
              </a>
            </li>
            <li>
              <a>
                <img src="src/assets/images/icon-twitter.svg" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
