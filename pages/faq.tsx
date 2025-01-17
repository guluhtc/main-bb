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
        <title>FAQ</title>
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
              FAQ
            </p>
          </div>
        </div>
        
      </main>
        <div className="mx-auto mt-10 max-w-2xl text-lg leading-8 px-4 mb-10"><p><strong>1. What is DecorAI?</strong> DecorAI is an innovative interior design service that utilizes cutting-edge artificial intelligence (AI) technology to create stunning and personalized interior designs for your home or business. By harnessing the power of AI, DecorAI offers efficient and cost-effective solutions for all your interior design needs.</p>
<br/>
<p><strong>2. How does DecorAI work?</strong> DecorAI employs advanced AI algorithms to analyze your preferences, space measurements, and design requirements. Based on this information, the AI generates multiple design options tailored to your unique style and specifications. These designs can include room layouts, color schemes, furniture placement, and more, helping you visualize your dream interior.</p>
<br/>
<p><strong>3. What makes DecorAI different from traditional interior design services?</strong> DecorAI stands out by leveraging AI to streamline the interior design process. Unlike traditional services that may involve multiple consultations, site visits, and lengthy design iterations, DecorAI provides quick and accurate design concepts based on your inputs. It saves time, eliminates guesswork, and offers cost-effective solutions for anyone seeking professional interior design expertise.</p>
<br/>
<p><strong>4. Can DecorAI help with both residential and commercial projects?</strong> Absolutely! DecorAI is designed to cater to both residential and commercial interior design projects. Whether you need to revamp your living room, redesign your office space, or plan an entire hotel interior, DecorAI can generate AI-generated designs that match your specific requirements.</p>
<br/>
<p><strong>5. How do I get started with DecorAI?</strong> To get started with DecorAI, simply visit our official website at <a href="http://www.decorai.xyz/" target="_new">www.decorai.xyz</a>. You can explore our services, view sample designs, and learn more about the process. When you're ready to begin, you can easily sign up for an account and provide us with the necessary details to kickstart your interior design project.</p>
<br/>
<p><strong>6. Is it necessary to have prior knowledge of interior design to use DecorAI?</strong> Not at all! DecorAI is designed to be user-friendly and accessible to everyone, regardless of their interior design knowledge. The AI algorithms take into account your preferences and requirements to generate designs that suit your taste. You don't need any specialized knowledge&mdash;just an idea of what you like and the willingness to explore new design possibilities.</p>
<br/>
<p><strong>7. Can I customize the AI-generated designs?</strong> Absolutely! While DecorAI's AI-generated designs provide an excellent starting point, you have complete flexibility to customize and modify them according to your preferences. You can adjust colors, swap furniture items, and experiment with different layouts until you achieve the desired outcome. DecorAI empowers you to be actively involved in the design process.</p>
<br/>
<p><strong>8. Is my personal information and design data secure with DecorAI?</strong> Yes, at DecorAI, we take the privacy and security of your personal information seriously. We employ robust measures to protect your data and ensure it is handled with the utmost confidentiality. Rest assured that your information will only be used for the purpose of creating your interior designs and will not be shared with any third parties without your consent.</p>
<br/>
<p><strong>9. What if I need additional assistance or have specific design questions?</strong> DecorAI understands that you may have specific questions or require additional assistance during your interior design journey. We offer customer support services to address any concerns or queries you may have. You can reach out to our support team through the contact information provided on our website, and we'll be more than happy to assist you.</p>
<br/>
<p><strong>10. Can I collaborate with professional interior designers through DecorAI?</strong> Currently, DecorAI focuses on AI-generated interior design concepts. However, we understand the value of human expertise in the design process. We are actively exploring partnerships with professional interior designers to offer a combined experience of AI-generated designs and expert consultations. Stay tuned for updates on this exciting feature!</p>
<br/>
<p><span>For&nbsp;</span>additional information or inquiries, please visit our official website at <a href="http://www.decorai.xyz/" target="_new">www.decorai.xyz</a>. We have a comprehensive FAQ section, a contact page, and additional resources to assist you in getting the most out of DecorAI.</p>
<br/>
<p>At DecorAI, we strive to provide a seamless and enjoyable interior design experience by harnessing the power of AI. Our goal is to help you transform your space into a beautiful and functional environment that reflects your unique style and personality. Whether you're looking to refresh a single room or undertake a complete renovation project, DecorAI is here to simplify the process and bring your vision to life.</p>
<br/>
<p>Don't hesitate to explore the possibilities of AI-generated interior design with DecorAI. Visit our website today to discover how AI can revolutionize the way you approach interior design.</p></div>
      
      <Footer />
    </div>
  );
}
