import { BUSINESS_INFO, CONTACT, SOCIAL } from '@/constants';

export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: BUSINESS_INFO.NAME,
        image: 'https://example.com/og-image.png', // TODO: Update with actual OG image URL
        description: '결과가 다른 프리미엄 영어 교육. 프리미엄 소수정예, 1:1 밀착 학습 관리. 달콤플러스만의 학습 시스템이 상위권으로 가는 지름길을 제시합니다.',
        url: 'https://example.com', // TODO: Update with actual domain
        telephone: CONTACT.PHONE,
        address: {
            '@type': 'PostalAddress',
            streetAddress: `${CONTACT.ADDRESS} ${CONTACT.ADDRESS_DETAIL}`,
            addressCountry: 'KR',
        },
        sameAs: [
            SOCIAL.INSTAGRAM,
            SOCIAL.NAVER_BLOG
        ],
        priceRange: '$$', // Optional
    };

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
