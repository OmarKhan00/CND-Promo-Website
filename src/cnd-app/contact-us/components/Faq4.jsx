import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import React from "react";
import { Header47 } from "./Header47";
import { useEffect } from "react";

const Faq4 = (props) => {
  const {
    heading,
    description,
    categories,
    footerHeading,
    footerDescription,
  } = {
    ...Faq4Defaults,
    ...props,
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait a moment for the DOM to render fully
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);
  
  return (
    <>
      <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20 ">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
              {heading}
            </h2>
            <p className="text-black md:text-md">{description}</p>
          </div>

          {/* FAQ Categories with Questions */}
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-governor-bay">{category.title}</h3>
              <Accordion type="multiple" className="grid gap-4">
                {category.questions.map((question, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`item-${catIndex}-${qIndex}`}
                    className="border border-border-primary px-5 md:px-6"
                  >
                    <AccordionTrigger
                      icon={
                        <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                      }
                      className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                    >
                      {question.title}
                    </AccordionTrigger>
                    <AccordionContent className="md:pb-6">
                      {/* Render answer as HTML */}
                      <div
                        dangerouslySetInnerHTML={{ __html: question.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footerHeading}
            </h4>
            <p className="md:text-md">{footerDescription}</p>
          </div>
        </div>
      </section>

      {/* Contact Form below FAQ */}
      <div id="contact-form">
      <Header47 />
      </div>
    </>
  );
};



const Faq4Defaults = {
  heading: "FAQs ",
  description:
    "Here are some common questions we receive from our users about our service",
  categories: [
    {
      title: "About CND",
      questions: [
        {
          title: "What is ChargeNextDoor?",
          answer:
          "ChargeNextDoor is a peer-to-peer EV charging platform that connects homeowners with EV chargers (hosts) to EV drivers (users) looking for convenient and affordable charging solutions. ",
        },
        {
          title: "Why does ChargeNextDoor Exist? ",
          answer:
            "ChargeNextDoor exists to address the growing demand for accessible and convenient electric vehicle (EV) charging infrastructure, particularly in residential areas where public charging stations may be limited. The platform connects homeowners who have EV chargers installed with EV owners who need a place to charge, allowing homeowners to monetize their chargers and offering EV users an easy way to find available charging spots near them. By fostering a community-driven solution, ChargeNextDoor helps support the transition to clean energy, promotes the use of electric vehicles, and creates a more sustainable, decentralized charging network. ",
        },
        {
          title: "Who is a host? ",
          answer:
          "A host is a person who rents out their residential home EV charger to the users on the CND app/platform ",
        },
        {
          title: "Who is a EV driver? ",
          answer:
          "A User is a person that owns an EV and rents a host’s charger to charge their vehicle using the CND app/platform.  ",
        },
        {
          title: "Can I be a Host & EV Driver  ",
          answer:
          "Yes, but you require to setup a different account for each.    ",
        },
        {
          title: "How do I sign up as a host  ",
          answer:
          "Just download the CND app on the app store once we launch and create an account on the app.  Join the wailist to be notified when we launch ",
        },
        {
          title: "How do I sign up as a EV driver   ",
          answer:
          "Just download the CND app on the app store once we launch and create an account on the app.  Join the wailist to be notified when we launch ",
        },
        {
          title: "How is CND different from  other charge sharing apps from other charge sharing apps   ",
          answer:
          `
                  <p>ChargeNextdoor stands out from other EV charging apps in a few key areas:</p>
            <ol>
              <li><strong>1. Homeowner-Centric Model:</strong> CND focuses on allowing homeowners with Level 2 chargers to become hosts, offering a unique model where people with private charging stations can monetize their equipment. This creates a decentralized, community-driven charging network rather than relying on large public charging stations or commercial providers.</li>
              <li><strong>2. Flexible, Localized Access:</strong> CND’s model caters to apartment, townhouse, and semi-terrace residents who may not have easy access to traditional charging infrastructure. The app helps connect EV owners with available chargers in local neighborhoods, often making charging more convenient for those who may not have a charger at home.</li>
              <li><strong>3. Peer-to-Peer (P2P) Charging:</strong> Unlike many commercial charging stations, which are managed by large networks, CND uses a peer-to-peer system. This means that users are directly connecting with other EV owners and homeowners, facilitating more personalized, flexible charging options in residential areas.</li>
              <li><strong>4. Revenue for Hosts:</strong> CND offers a unique opportunity for homeowners to generate income by renting out their chargers, turning an underused asset into a passive income stream. This can be especially beneficial for those who might have excess capacity or chargers not being used at all times.</li>
              <li><strong>5. Focused on Sustainability:</strong> CND prioritizes sustainability and the transition to electric vehicles by supporting the growth of decentralized, home-based charging infrastructure, which complements broader goals of reducing carbon emissions and promoting clean energy.</li>
            </ol>
            These differentiators make ChargeNextDoor not just another charge-sharing app, but a platform that empowers homeowners, improves convenience for EV owners, and supports the eco-friendly movement by building a localized, community-focused charging ecosystem 
          `,
        },
        {
          title: " Is there a membership cost or contract to use the app?  ",
          answer:
          "There are no contracts to sign or membership to pay for before using the app. We only take 10% of the charge session each time you use it. This comes out of the Host charging price.   ",
        },
        {
          title: " Do you have to own an Electric Vehicle to be a Host? ",
          answer:
          "No , although it is expected that most hosts are EV owners. We expect Hosts to be renting out chargers that’s have been provided as part of their property and some which have fitted them specifically to make income from spare space on their property. "
        },
        {
          title: " What about risks and liabilities? ",
          answer: `
          <p>It is each user’s responsibility to conduct appropriate risk assessment and implement proper safety measures.</p>

          <p><strong>For Hosts:</strong></p>
          <ul>
            <li>Ensure the charger is safe, functional, and compliant with all relevant standards.</li>
            <li>Keep the charging area free of hazards.</li>
            <li>Maintain the same safety and care as you would for personal use.</li>
          </ul>

          <p><strong>For Users:</strong></p>
          <ul>
            <li>Use the charger responsibly.</li>
            <li>Avoid causing damage - treat it like any borrowed property.</li>
          </ul>

          <p><strong>Insurance & Coverage:</strong></p>
          <ul>
            <li>Theft or damage during a session is generally covered by your car insurance.</li>
            <li>A Host’s home insurance may cover property damage, but this is not guaranteed.</li>
            <li>Please consult your insurance provider to confirm what’s covered.</li>
          </ul>

          <p><strong>Final Note:</strong> Many Hosts accept a small inherent risk, similar to lending a bicycle. While Users are responsible for any incidents, specific insurance is rarely carried for such informal use. We encourage everyone to make an informed decision based on their comfort with this level of shared responsibility.</p>
        `
        },
        {
          title: " Is CND safe and what about privacy? ",
          answer:
          "Personal safety, as with any interaction involving face-to-face meetings, is a matter that each individual must assess based on their own circumstances and preferences."+
           "Regarding privacy highly secure and specialized third party payment services are used to store and process all financial details  which are not kept by CND ." 
          ,
        },
        {
          title: " How to report, a query, problem or feedback  ",
          answer:
          "You can use the contact us via email chargenextdoor@gmail.com or via at the end of this FAQ page their is a contact us section just fill out the forum and we will get back to you   ",
        },
        {
          title: " Is there a membership cost or contract to use the app?  ",
          answer:
          "There are no contracts to sign or membership to pay for before using the app. We only take 10% of the charge session each time you use it. This comes out of the Host charging price.   ",
        },
        {
          title: " Is there a membership cost or contract to use the app?  ",
          answer:
          "There are no contracts to sign or membership to pay for before using the app. We only take 10% of the charge session each time you use it. This comes out of the Host charging price.   ",
        },
      ],
    },
    {
      title: "General",
      questions: [
        {
          title: "How does the platform work? ",
          answer:
            "Hosts list their EV chargers on the platform, and users can book these chargers based on location, availability, and pricing. Users can charge their EVs at the host’s charger, and payment is processed securely through the app. ",
        },
        {
          title: "Who can use ChargeNextDoor? ",
          answer:
            "Anyone with an electric vehicle looking for a charging spot, as well as individuals with an EV charger who want to earn extra income by sharing their charger. ",
        },
        {
          title: " How does pricing work ? ",
          answer:
            "For hosts, pricing is based on their location, as each host is covered by a different utility provider. For users, the pricing depends on the host's location, with each host setting a specific $/kWh rate. As a platform, we do our best to ensure that hosts do not set monopolistic charging prices.  ",
        },
        {
          title: "How is the amount that will be paid is calculated? ",
          answer:
            "For the host the amount paid is calculated based on the time, the user car battery capacity and  host set charging rate ($/kwh).    ",
        },
      ],
    },
    {
      title: "Hosts",
      questions: [
        {
          title: "How do I list my charger",
          answer:
            `
            <p>Sign up as a host on the ChargeNextDoor app.</p>

            <p>Then, complete the following steps:</p>
            <ul>
              <li>Fill out the details about your charger, including its type (e.g., Level 2), availability, and pricing.</li>
              <li>Upload photos and provide a brief description of your location.</li>
            </ul>
           `
          },
        {
          title: " What are my responsibilities ",
          answer:
          `
          <p>Hosts’ responsibilities are as follows and limited to:</p>
          
          <ul>
            <li>Keep your charging price rate up to date to ensure you’re paid fairly, while also offering an affordable price to Users.</li>
            <li>Ensure the charger is safe, functional, and fully compliant with all relevant standards. The area used by Users should also be free from any hazards.</li>
            <li>Make sure your home insurance is active and provides coverage for any minor damages that might occur during the charging process.</li>
            <li>Ensure EV drivers (users) use the app to record their charging sessions so that all payments can be processed automatically.</li>
          </ul>
          `,
        },
        {
          title: " How much can I charge  Drivers (Users) ",
          answer:
          "You can set your own pricing based on factors like location, electricity rates, and charger type. ChargeNextDoor provides pricing recommendations to help you remain competitive. "
          ,
        },
        {
          title: " How much can I earn as host ",
          answer:
          "As a host, your earnings depend on the pricing you set and the cost of electricity. If your home electricity rate is 30¢ per kWh and you use a standard 7.4kW charger, you can price your charging service based on kWh. For example, if a user consumes 40kWh per week, and you set your price at $0.50 per kWh, the total revenue per session would be $20 (if the User charges weekly). ChargeNextDoor takes a 10% fee, amounting to $2 per session. The electricity cost for 40kWh at $0.30 per kWh would be $12, leaving you with a profit of $6 per session. Over the course of a year, with one session per week, this could add up to approximately $312 in earnings from just one regular user.  "
          ,
        },
        {
          title: " How do I decide what price to set for renting out my charger? ",
          answer:
          `
          <p>As a host, you set a price ($AUD/kWh) for the charger; you're renting out your charger and not selling your electricity.</p>
          <p>When setting the price, you need to take into account the following:</p>
          <ul>
          <li><strong>What electricity will cost you:</strong> During the host setup process, the app provides guidance on the wholesale electricity price provided by your distributor in your location.</li>
         <li><strong>Wear and tear on your charger:</strong> Consider the maintenance and depreciation of your charger over time.</li>
         <li><strong>A decent amount to reward yourself:</strong> Ensure you’re fairly compensated for providing the service.</li>
         <li><strong>The 10% fee:</strong> The app will take a 10% fee to keep running ChargeNextDoor (CND).</li>
          </ul>
          <p><strong>Note:</strong> The price is subject to change at any time. However, any price adjustments are reviewed by us to ensure fairness and prevent monopolistic practices or price gouging, particularly in areas with low host penetration.</p>
          `
          ,
        },
        {
          title: " When do I get paid ",
          answer:
          " Since payments are processed by a third-party provider (Stripe), you’ll need to create a Stripe Express account when signing up as a host. This allows payments to be deposited directly into your bank account. The first payout typically takes longer (7–14 days), but after that, payouts will be processed weekly. "
          ,
        },
        {
          title: " Do I have to pay tax on money that I have earned ",
          answer:
          " You will be credited a payment (Payment) in connection with each booking held at your Charge Facility, subject to deductions for our services, GST and other applicable charges (Fees)"
          ,
        },
        {
          title: " What if I have nowhere to park my car while someone else’s use my charger?",
          answer:
          " This depends on individual circumstances and preferences. If you have the space to leave your car in a way that allows the driver easy access to the charger, that’s ideal. If accommodating this is more challenging, it’s a matter of balancing the inconvenience against the potential income from hosting—and, of course, the positive impact you’re making! "
          ,
        },
        {
          title: " What if a driver doesn't turn up",
          answer:
          " In CND, when a driver books a session, a percentage of the estimated charging cost is taken as a pre-authorization. If the user cancels within 2 hour of the booking time, the pre-authorization amount will be refunded. If not, the pre-authorization is transferred to the host, and the driver will be charged a penalty fee which is 10% of the estimted charge amount. However, if a driver becomes unreliable, the host can cancel future bookings and decline any further requests  "
          ,
        },
        {
          title: " What if a driver damages my charger",
          answer:
          "If a Driver causes any damage to your Charge Facility as a result of a Charge Session, you may charge the Driver’s payment method on file for the repair costs after providing notice and evidence of such damage. Upon verification, the costs associated with the repair will be recovered from the Driver’s account. For the avoidance of doubt, we are not responsible in any way for the Driver’s actions or otherwise (including any damage caused by the Driver). "
          ,
        }
      ],
    },
    {
      title: "Drivers",
      questions: [
        {
          title: "How do I find a charger?",
          answer:
            `
            <p>Open the ChargeNextDoor app.</p>

            <p>Then follow these steps:</p>
            <ul>
              <li>Enter your destination or browse nearby chargers.</li>
              <li>Select a charger based on availability, price, and location.</li>
            </ul>
          `
          ,
        },
        {
          title: "How is the session timed ",
          answer:
            "The session starts when you plug in your vehicle, and the countdown timer in the app begins. It ends when you unplug your vehicle and the timer finishes, or if you choose to end the session earlier by clicking the 'End Timer' button ",
        },
        {
          title: "How do I pay for a parking session ",
          answer:
            " Payment is processed automatically through the app after the session ends. A third party  payment provide (Stripe) will be used to process your payment.   ",
        },
        {
          title: "How can I see the closest home charge points in my area/neighbourhood?  ",
          answer:
            "You get an idea about the Hosts on the network by viewing the in-app map. However, for privacy reasons the full address datils of the hosts are not displayed. Only once a user registers and books a session with the host  and the host accepts the request their full address details are displayed.   ",
        },
        {
          title: " How much does it cost to charge my EV using the app? ",
          answer:
            "  Hosts prices vary as they get to set the charging price  $AUD/kwh. Typically, the price set is less than the general public EV charging . You can book the whole time when you need to charge but do not have to pay for parking.  ",
        },
        {
          title: " What if I don’t want to be there when my charging finishes ",
          answer:
            "  You don’t have to be there. It is entirely up to you and (if the hosts ) agrees on it you can stay.  Else you can leave the car charging and come back it is finished and only pay for the charging used/energy delivered.  ",
        },
        {
          title: " How is the amount to be paid is to be calculated  ",
          answer:
          `
            <p>When a user books a session with a host, an estimated cost is calculated based on the current charge level of the user’s EV and the additional charge they wish to add. At the time of booking, a percentage of this estimated cost is pre-authorized on the user’s payment method using Stripe’s Payment Intents API with an authorization hold. This ensures the user has sufficient funds without immediately processing the charge.</p>

            <p>Once the user starts charging at the reserved time and ends the session, the actual cost of the session is determined based on the kWh consumed and the host's set rate. The pre-authorized amount is adjusted accordingly:</p>

            <ul>
            <li><strong>If the final cost is equal to or higher</strong> than the pre-authorized amount, Stripe captures the full amount or the final adjusted amount.</li>
            <li><strong>If the final cost is lower,</strong> the difference is released, and the user is only charged the actual amount.</li>
            </ul>
            <p>In cases where the session is canceled or not completed, the pre-authorization hold will automatically expire after a certain period (typically 7 days, depending on the bank and Stripe settings).</p>
          `

         },
         {
          title: " What if I forgot to start a charging  session ",
          answer:
          "You will receive multiple warnings if this action is repeated. After a certain number of occurrences, your account may be suspended. We also send push notifications to remind you to start your charging session. "
         },
         {
          title: " Do I pay the whole time when my car is connected to the charger ? ",
          answer:
          "You only pay per kWh delivered and not how long is connected to the car "
         },
         {
          title: " What happened if I forgot to end session?  ",
          answer:
          " You will receive multiple warnings if this action is repeated. After a certain number of occurrences, your account may be suspended. We also send push notifications to remind you to start your charging session.  "
         },
      ],
    },
    {
      title: "Account and Billing",
      questions: [
        {
          title: "How do I create an account? ",
          answer:
           "Download the ChargeNextDoor app, sign up with your email or social media account, and follow the onboarding instructions. "
          ,
        },
        {
          title: "Can I edit my profile or payment details?  ",
          answer:
            "Yes, you can edit your profile and update payment details in the app under the Settings section.  ",
        },
        {
          title: " What if I have issues with billing?  ",
          answer:
            " Contact our support team through the app or email us at chargenextdoor@gmail.com with your session details.   ",
        },
        {
          title: " Is my personal information secure? ",
          answer:
            " Yes, we prioritize your privacy and use secure payment systems to protect your data.   ",
        },
        {
          title: " What should I do if I ecnocunter a problem  ",
          answer:
            "  You can reach out to our support team via the in-app chat or by emailing chargeNextDoor@gmail.com. Hosts and users are also encouraged to communicate through the app to resolve minor issues.  ",
        },
        {
          title: "Can I cancel a booking? ",
          answer:
            "  Yes, both hosts and users can cancel bookings within the app. Refer to our cancellation policy for more details.  ",
        },
      ],
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription:
    "Reach out to our team by filling the details in the contact section below and we’ll get back to you ASAP.",
};


export { Faq4, Faq4Defaults };
