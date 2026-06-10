/* eslint-disable */
const { useEffect } = React;

function App() {
  useEffect(() => {
    document.body.setAttribute('data-ready', '1');
  }, []);
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Timeline />
      <Skills />
      <Services />
      <SEO />
      <Projects />
      <Stats />
      <Testimonials />
      <Leadership />
      <Stack />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
