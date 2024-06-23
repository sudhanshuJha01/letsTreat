import React from "react";
import {Hero , CoustomerReview , Footer ,PopularProduct , Services , Subscriber , SpecialOffers , SuperQuality} from './section/index'

function App() {
  return (
    <>
      <main className="relative">
              Nav
          <section className="xl:padding-1 wide:padding-r padding-b ">
           <Hero/>
          </section>
          <section className="padding">
            <PopularProduct/>
          </section>
          <section className="padding">
             <SuperQuality/>
          </section>
          <section className="padding-x padding-y">
             <Services/>
          </section>
          <section className="padding">
            <CoustomerReview/>
          </section>
          <section className="bg-pale-blue padding">
           < SpecialOffers/>
          </section>
          <section className="padding-x sm:py-32 py-16 w-full">
            <Subscriber/>
          </section>
          <section className="bg-black padding-x  padding-t pn-8">
            <Footer/>
          </section>
      </main>
    </>
  );
}

export default App;
