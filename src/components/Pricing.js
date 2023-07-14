import React from 'react'
import PriceCard from './PriceCard'
import Layout from './Layout'

const Pricing = () => {
  return (
    <div>
    <Layout className="pt-0 h-full">
          <div class="container text-white m-12 mx-auto md:px-12">
            <section class="mb-12">
              <h2 class="mb-12 text-center text-black text-4xl font-bold">Pricing</h2>

              <div class="grid gap-3 lg:grid-cols-3 lg:gap-x-6 ">
                <PriceCard title="Professional Plan" price="$369" first="10 pages" second="Responsive design" third="Basic SEO" fourth="1-month maintenance"      />
                <PriceCard title="Expert Plan" price="$699" first="25 pages" second="Responsive design" third="Advance SEO" fourth="3-months maintenance" fifth="E-commerece" />
                <PriceCard title="Enterprise Plan" price="$999" first="Unlimited pages" second="Responsive design" third="Advance SEO" fourth="6-months maintenance" fifth="E-commerece" sixth="Andriod Application" />
                

                
              </div>
            </section>
          </div>
        </Layout>
    </div>
  )
}

export default Pricing
