import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function FloatingButton() {
    const socialLinks = [
        {
            id: 1,
            icon: <FaWhatsapp size={24} />,
            color: 'text-[#25D366]',
            href: 'https://api.whatsapp.com/send/?phone=08119004440&text&type=phone_number&app_absent=0',
            label: 'WhatsApp'
        },
        {
            id: 2,
            icon: <FaFacebookF size={22} />,
            color: 'text-[#1877F2]',
            href: 'https://www.facebook.com/dpmptsp.kota.bogor/',
            label: 'Facebook'
        },
        {
            id: 3,
            icon: <FaInstagram size={24} />,
            color: 'text-[#E4405F]',
            href: 'https://www.instagram.com/dpmptsp_kotabgr/',
            label: 'Instagram'
        },
        {
            id: 4,
            icon: <FaYoutube size={24} />,
            color: 'text-[#FF0000]',
            href: 'https://www.youtube.com/channel/UCebMgEnWoeGoraGpxz42vEg',
            label: 'YouTube'
        },
    ];

    return (
        <div className="fixed top-32 right-4 z-30 flex flex-col gap-3">
            {socialLinks.map((social) => (
                <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-xl hover:scale-110 transition-all duration-200 ${social.color}`}
                    aria-label={social.label}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};