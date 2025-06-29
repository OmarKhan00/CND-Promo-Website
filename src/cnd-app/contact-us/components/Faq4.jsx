import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import React from "react";
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
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);
  
  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-4xl relative z-10">
        {/* /* Header Section */}
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-base font-medium text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
              <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              Frequently Asked Questions
            </div>
            {/* <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {heading}
            </h2> */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{description}</p>
        </div>

        {/* FAQ Categories with Questions */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100/60 to-blue-100/60 border border-emerald-200/50 rounded-full text-sm font-bold text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
              {category.title}
            </div>
            
            <Accordion type="multiple" className="grid gap-4">
              {category.questions.map((question, qIndex) => (
                <AccordionItem
                  key={qIndex}
                  value={`item-${catIndex}-${qIndex}`}
                  className="rounded-xl bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 px-6 overflow-hidden"
                >
                  <AccordionTrigger
                    icon={
                      <RxPlus className="size-6 shrink-0 text-gray-700 transition-transform duration-300 md:size-7" />
                    }
                    className="py-5 text-left font-bold text-gray-800 hover:text-emerald-600 transition-colors duration-300 [&[data-state=open]>svg]:rotate-45"
                  >
                    {question.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                    <div
                      dangerouslySetInnerHTML={{ __html: question.answer }}
                      className="prose prose-sm max-w-none prose-emerald prose-li:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-800"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        {/* Footer Section */}
        <div className="mx-auto mt-12 max-w-2xl text-center md:mt-18 lg:mt-20">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm border border-white/30 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-4 md:text-3xl">
              {footerHeading}
            </h4>
            <p className="text-gray-600 leading-relaxed">{footerDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};



const Faq4Defaults = {
  heading: "FAQs",
  description:
    "Here are some common questions we receive from our users about our service.",
  categories: [
    {
      title: "About CND",
      questions: [
        {
          title: "What is ChargeNextDoor?",
          answer:
            "ChargeNextDoor is a peer-to-peer EV charging platform that connects homeowners with EV chargers (hosts) to EV drivers looking for convenient and affordable charging solutions.",
        },
        {
          title: "Why does ChargeNextDoor exist?",
          answer:
            "ChargeNextDoor exists to address the growing demand for accessible and convenient electric vehicle (EV) charging infrastructure, especially in residential areas where public charging stations may be limited. The platform connects homeowners who have EV chargers with EV owners who need a place to charge, allowing homeowners to earn money and EV drivers to find convenient charging spots nearby. By fostering a community-driven solution, ChargeNextDoor supports the transition to clean energy and a more sustainable, decentralized charging network.",
        },
        {
          title: "Who is a host?",
          answer:
            "A host is someone who rents out their residential EV charger to users on the CND app/platform.",
        },
        {
          title: "Who is an EV driver?",
          answer:
            "An EV driver is a person who owns an electric vehicle and rents a host's charger to charge their car using the CND app/platform.",
        },
        {
          title: "Can I be both a host and an EV driver?",
          answer:
            "Yes, but you need to set up a separate account for each role.",
        },
        {
          title: "How do I sign up as a host?",
          answer:
            "Download the CND app from the app store once we launch and create an account. Join the waitlist to be notified when we launch.",
        },
        {
          title: "How do I sign up as an EV driver?",
          answer:
            "Download the CND app from the app store once we launch and create an account. Join the waitlist to be notified when we launch.",
        },
        {
          title: "How is CND different from other charge sharing apps?",
          answer:
            `<p>ChargeNextDoor stands out from other EV charging apps in several key ways:</p>
            <ol>
              <li><strong>Homeowner-Centric Model:</strong> CND lets homeowners with Level 2 chargers become hosts, creating a decentralized, community-driven charging network.</li>
              <li><strong>Flexible, Local Access:</strong> CND helps connect EV owners with available chargers in their neighborhoods, making charging more convenient for those without a charger at home.</li>
              <li><strong>Peer-to-Peer Charging:</strong> Users connect directly with other EV owners and homeowners, offering more personalized, flexible charging options.</li>
              <li><strong>Income for Hosts:</strong> Homeowners can earn passive income by renting out their chargers.</li>
              <li><strong>Focus on Sustainability:</strong> CND supports the growth of home-based charging infrastructure, helping reduce carbon emissions and promote clean energy.</li>
            </ol>
            <p>These features make ChargeNextDoor more than just another charge-sharing app—it empowers homeowners, improves convenience for EV owners, and supports a greener future.</p>`,
        },
        {
          title: "Is there a membership cost or contract to use the app?",
          answer:
            "There are no contracts or membership fees. We only take a 10% fee from each charging session, which comes out of the host's price.",
        },
        {
          title: "Do I have to own an electric vehicle to be a host?",
          answer:
            "No. While most hosts are EV owners, anyone with a suitable charger can become a host, whether the charger came with the property or was installed to earn extra income.",
        },
        {
          title: "What about risks and liabilities?",
          answer:
            `<p>Each user is responsible for assessing risks and following safety measures.</p>
            <p><strong>For Hosts:</strong></p>
            <ul>
              <li>Ensure your charger is safe, functional, and meets all standards.</li>
              <li>Keep the charging area free of hazards.</li>
              <li>Maintain the same safety as you would for personal use.</li>
            </ul>
            <p><strong>For Users:</strong></p>
            <ul>
              <li>Use the charger responsibly.</li>
              <li>Treat it with care, as you would any borrowed property.</li>
            </ul>
            <p><strong>Insurance & Coverage:</strong></p>
            <ul>
              <li>Theft or damage is usually covered by your car insurance.</li>
              <li>A host's home insurance may cover property damage, but check with your provider.</li>
            </ul>
            <p><strong>Note:</strong> Most hosts accept a small inherent risk, similar to lending a bicycle. Users are responsible for incidents, but specific insurance is rarely carried for informal use. Make an informed decision based on your comfort level.</p>`,
        },
        {
          title: "Is CND safe and what about privacy?",
          answer:
            "Personal safety, as with any in-person meeting, is up to each individual. For privacy, all financial details are handled by secure third-party payment services and are not stored by CND.",
        },
        {
          title: "How do I report a query, problem, or give feedback?",
          answer:
            "You can contact us by email at chargenextdoor@gmail.com or use the contact form at the end of this FAQ page. We'll get back to you as soon as possible.",
        },
      ],
    },
    {
      title: "General",
      questions: [
        {
          title: "How does the platform work?",
          answer:
            "Hosts list their EV chargers on the platform, and users can book these chargers based on location, availability, and pricing. Users can charge their EVs at the host’s charger, and payment is processed securely through the app.",
        },
        {
          title: "Who can use ChargeNextDoor?",
          answer:
            "Anyone with an electric vehicle looking for a charging spot, as well as individuals with an EV charger who want to earn extra income by sharing their charger.",
        },
        {
          title: "How does pricing work?",
          answer:
            "For hosts, pricing is based on their location, as each host is covered by a different utility provider. For users, the pricing depends on the host's location, with each host setting a specific $/kWh rate. As a platform, we do our best to ensure that hosts do not set monopolistic charging prices.",
        },
        {
          title: "How is the amount that will be paid calculated?",
          answer:
            "For the host, the amount paid is calculated based on the time, the user's car battery capacity, and the host-set charging rate ($/kWh).",
        },
      ],
    },
    {
      title: "Hosts",
      questions: [
        {
          title: "How do I list my charger?",
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
          title: "What are my responsibilities?",
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
          title: "How much can I charge Drivers (Users)?",
          answer:
          "You can set your own pricing based on factors like location, electricity rates, and charger type. ChargeNextDoor provides pricing recommendations to help you remain competitive. "
          ,
        },
        {
          title: "How much can I earn as a host?",
          answer:
          "As a host, your earnings depend on the pricing you set and the cost of electricity. If your home electricity rate is 30¢ per kWh and you use a standard 7.4kW charger, you can price your charging service based on kWh. For example, if a user consumes 40kWh per week, and you set your price at $0.50 per kWh, the total revenue per session would be $20 (if the User charges weekly). ChargeNextDoor takes a 10% fee, amounting to $2 per session. The electricity cost for 40kWh at $0.30 per kWh would be $12, leaving you with a profit of $6 per session. Over the course of a year, with one session per week, this could add up to approximately $312 in earnings from just one regular user.  "
          ,
        },
        {
          title: "How do I decide what price to set for renting out my charger?",
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
          title: "When do I get paid?",
          answer:
          "Since payments are processed by a third-party provider (Stripe), you’ll need to create a Stripe Express account when signing up as a host. This allows payments to be deposited directly into your bank account. The first payout typically takes longer (7–14 days), but after that, payouts will be processed weekly. "
          ,
        },
        {
          title: "Do I have to pay tax on money that I have earned?",
          answer:
          "You will be credited a payment (Payment) in connection with each booking held at your Charge Facility, subject to deductions for our services, GST and other applicable charges (Fees)"
          ,
        },
        {
          title: "What if I have nowhere to park my car while someone else uses my charger?",
          answer:
          "This depends on individual circumstances and preferences. If you have the space to leave your car in a way that allows the driver easy access to the charger, that’s ideal. If accommodating this is more challenging, it’s a matter of balancing the inconvenience against the potential income from hosting—and, of course, the positive impact you’re making! "
          ,
        },
        {
          title: "What if a driver doesn't turn up?",
          answer:
          "In CND, when a driver books a session, a percentage of the estimated charging cost is taken as a pre-authorization. If the user cancels within 2 hour of the booking time, the pre-authorization amount will be refunded. If not, the pre-authorization is transferred to the host, and the driver will be charged a penalty fee which is 10% of the estimted charge amount. However, if a driver becomes unreliable, the host can cancel future bookings and decline any further requests  "
          ,
        },
        {
          title: "What if a driver damages my charger?",
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
          title: "How is the session timed?",
          answer:
            "The session starts when you plug in your vehicle, and the countdown timer in the app begins. It ends when you unplug your vehicle and the timer finishes, or if you choose to end the session earlier by clicking the 'End Timer' button.",
        },
        {
          title: "How do I pay for a parking session?",
          answer:
            "Payment is processed automatically through the app after the session ends. A third party payment provider (Stripe) will be used to process your payment.",
        },
        {
          title: "How can I see the closest home charge points in my area/neighbourhood?",
          answer:
            "You can get an idea about the Hosts on the network by viewing the in-app map. However, for privacy reasons, the full address details of the hosts are not displayed. Only once a user registers and books a session with the host, and the host accepts the request, are their full address details displayed.",
        },
        {
          title: "How much does it cost to charge my EV using the app?",
          answer:
            "Hosts set their charging price in $AUD/kWh. Typically, the price set is less than the general public EV charging. You can book the charger for the whole time you need to charge, but you do not have to pay for parking.",
        },
        {
          title: "What if I don’t want to be there when my charging finishes?",
          answer:
            "You don’t have to be there. It is entirely up to you and (if the host agrees) you can stay. Otherwise, you can leave the car charging and come back when it's finished, paying only for the charging used/energy delivered.",
        },
        {
          title: "How is the amount to be paid calculated?",
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
          title: "What if I forgot to start a charging session?",
          answer:
          "You will receive multiple warnings if this action is repeated. After a certain number of occurrences, your account may be suspended. We also send push notifications to remind you to start your charging session.",
         },
         {
          title: "Do I pay the whole time when my car is connected to the charger?",
          answer:
          "You only pay per kWh delivered and not for how long it is connected to the car.",
         },
         {
          title: "What happens if I forget to end the session?",
          answer:
          "You will receive multiple warnings if this action is repeated. After a certain number of occurrences, your account may be suspended. We also send push notifications to remind you to start your charging session.",
         },
      ],
    },
    {
      title: "Account and Billing",
      questions: [
        {
          title: "How do I create an account?",
          answer:
           "Download the ChargeNextDoor app, sign up with your email or social media account, and follow the onboarding instructions.",
          },
        {
          title: "Can I edit my profile or payment details?",
          answer:
            "Yes, you can edit your profile and update payment details in the app under the Settings section.",
        },
        {
          title: "What if I have issues with billing?",
          answer:
            "Contact our support team through the app or email us at chargenextdoor@gmail.com with your session details.",
        },
        {
          title: "Is my personal information secure?",
          answer:
            "Yes, we prioritize your privacy and use secure payment systems to protect your data.",
        },
        {
          title: "What should I do if I encounter a problem?",
          answer:
            "You can reach out to our support team via the in-app chat or by emailing chargeNextDoor@gmail.com. Hosts and users are also encouraged to communicate through the app to resolve minor issues.",
        },
        {
          title: "Can I cancel a booking?",
          answer:
            "Yes, both hosts and users can cancel bookings within the app. Refer to our cancellation policy for more details.",
        },
      ],
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription:
    "Reach out to our team by filling the details in the contact section below and we’ll get back to you ASAP.",
};


export { Faq4, Faq4Defaults };
