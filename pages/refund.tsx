import { useSession } from "next-auth/react";
import Script from "next/script";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import useSWR from "swr";

export default function Pricing() {
  const { data: session } = useSession();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/remaining", fetcher);

  return (
    <div className="flex mx-auto max-w-7xl overflow-visible flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Refund Policy</title>
      </Head>
      <Script src="https://js.stripe.com/v3/pricing-table.js" />
      <Script src="https://cdn.paritydeals.com/banner.js" />
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mb-0 mb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Refund Policy
            </p>
          </div>
        </div>
        
      </main>
        <div className="mx-auto mt-10 max-w-2xl text-lg leading-8 px-4 mb-10"><p><span>Effective Date: 13 May 2023</span><br /><br /><span>Thank you for choosing DecorAI for your AI-generated interior design needs. We strive to provide you with high-quality designs and exceptional customer service. However, we understand that there may be situations where a refund is necessary. This refund policy outlines the terms and conditions for requesting a refund from DecorAI.</span><br /><br /><span>1. Eligibility for Refund:</span><br /><span>a. Our refund policy applies to all paid services provided by DecorAI through our official website, </span><a rel="nofollow noopener" target="_blank" href="http://www.decorai.xyz/">www.decorai.xyz</a><span>.</span><br /><span>b. Refunds can only be requested by the individual or entity that made the original payment.</span><br /><br /><span>2. Refund Requests:</span><br /><span>a. To initiate a refund request, you must contact our customer support team within 14 days from the date of purchase.</span><br /><span>b. Refund requests must be submitted in writing, either by email or through our customer support ticketing system.</span><br /><span>c. Please provide detailed information regarding the reason for your refund request, including any relevant supporting documentation, screenshots, or examples.</span><br /><br /><span>3. Non-Refundable Services:</span><br /><span>a. Once the AI-generated interior design has been delivered to you, it is considered a completed service, and refunds will generally not be issued.</span><br /><span>b. Any additional services provided by DecorAI beyond the AI-generated design, such as design consultations or customization requests, may be subject to separate refund policies or fees.</span><br /><br /><span>4. Refund Approval and Processing:</span><br /><span>a. All refund requests will be carefully reviewed by our customer support team.</span><br /><span>b. DecorAI reserves the right to refuse a refund if we determine that the request does not meet the eligibility criteria or if there is evidence of misuse, abuse, or fraudulent activity.</span><br /><span>c. If your refund request is approved, we will process the refund within 14&nbsp;days of the approval notification.</span><br /><span>d. Refunds will be issued using the same payment method used for the original purchase unless otherwise specified.</span><br /><br /><span>5. Third-Party Fees:</span><br /><span>a. Please note that any third-party fees associated with your purchase, such as transaction fees or currency conversion fees, are non-refundable and will not be included in the refund amount.</span><br /><br /><span>6. Modifications to the Refund Policy:</span><br /><span>a. DecorAI reserves the right to modify this refund policy at any time without prior notice.</span><br /><span>b. Any changes to the refund policy will be effective immediately upon posting the updated version on our official website.</span><br /><br /><span>If you have any questions or require further assistance regarding our refund policy, please contact our customer support team at </span><a rel="nofollow noopener" target="_blank" href="mailto:decorai.xyz@gmail.com">decorai.xyz@gmail.com</a><span>. We are here to help and ensure your satisfaction with our services.</span><br /><br /><span>Note: This refund policy is for informational purposes only and does not create any contractual obligations between DecorAI and its customers. The terms and conditions of the refund policy are subject to change at the discretion of DecorAI.</span></p></div>
      
      <Footer />
    </div>
  );
}
