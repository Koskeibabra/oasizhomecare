
import React from "react";
import { Head } from "@components/Head";
import { HeaderHome } from "@components/Header";
import { Footer } from "@components/Footer";



import {
 

  SectionFeatures,
  SectionBusiness,
  SectionServices,

 
} from "@components/Sections/Home";
import {
  SectionContactus,
} from "@components/Sections";
import { Navigation } from "@components/Navigation";
import { GetStaticPropsContext } from "next";

export default function Home() {
  return (
    <>
      <Head
        title={"Oasiz | Home"}
        description={
          "HealthCare At Your Doorstep."
        }
      />      
      <Navigation/>
      <HeaderHome />
      <SectionBusiness />
      <SectionServices />
      <SectionFeatures />
      <SectionContactus/>
      <Footer />
  
    </>
  );
}


export function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../lang/${locale}.json`)
    }
  };
}