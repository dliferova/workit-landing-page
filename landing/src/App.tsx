function App() {
  return (
    <>
      <header className="dark-bg">
        <div className="container pb-40">
          <div className="flex flex-row justify-between items-center h-[100px]">
            <img
              src="src/assets/images/logo-light.svg"
              width="97"
              height="26"
              alt="Workit logo"
            />
            <button className="button-secondary">Apply for access</button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl text-center font-fraunces mb-10">
              Data tailored to your needs.
            </p>
            <button className="button-ordinary w-[133px]">Learn more</button>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <h1 className="visually-hidden text-gray-600">Work It</h1>
        <section className="light-bg">
          <div className="container">
            <ul>
              <li>
                <p className="font-fraunces">Actionable insights</p>
                <p>
                  Optimize your products, improve customer satisfaction and stay
                  ahead of the competition with our product data analytics.
                </p>
              </li>
              <li>
                <p className="font-fraunces">Data-driven decisions</p>
                <p>
                  Make data-driven decisions with our product data analytics.
                  Our AI-generated reports help you unlock insights hidden in
                  your product data.
                </p>
              </li>
              <li>
                <p className="font-fraunces">Always affordable</p>
                <p>
                  Always affordable pricing that scales with your business. Get
                  top-quality product data analytics services without hidden
                  costs or unexpected fees.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="dark-bg">
          <div className="container ">
            <p>Be the first to test</p>
            <p>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
            <button className="button-ordinary w-[133px]">
              Apply for access
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container">
          <img
            src="src/assets/images/logo-dark.svg"
            width="96"
            height="25"
            alt="Workit logo"
          />
          <ul className="inline-flex">
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
