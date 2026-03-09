export type Profile = {
  name: string
  role: string
  birthYear: string
  summary: string
}

export type Project = {
  name: string
  description: string
  link?: string
  linkLabel?: string
  id: string
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  description: string[]
  link?: string
  id: string
}

export type SocialLink = {
  label: string
  link: string
}

export const PROFILE: Profile = {
  name: 'Amir Houshmand',
  role: 'Senior Mobile App Developer',
  birthYear: '1996',
  summary:
    'Senior Mobile Developer with 12+ years of experience delivering production-grade applications across Flutter, Android, and iOS. My background spans VoIP, WebRTC, blockchain, BLE, mapping, and real-time systems, with shipped products ranging from decentralized messengers and crypto wallets to taxi platforms, business social apps, and communication tools.',
}

export const SKILLS: string[] = [
  'Flutter',
  'Android (Kotlin, Java)',
  'iOS (Swift)',
  'WebRTC, video and sound streaming',
  'Firebase systems',
  'Socket.io and WebSocket',
  'CallKit, Silent PushKit, Background Fetch iOS',
  'Git, GitHub Flow and CI/CD',
  'VoIP apps (Linphone and Zoiper)',
  'OpenStreetMap',
  'TensorFlow and OpenCV',
  'ARKit',
  'gRPC and GraphQL',
  'Communication with BLE devices',
  'Blockchain, Wallet Core and Web3',
  'Clean Architecture and TDD',
  'Hybrid apps',
  'Agentic AI systems',
]

export const PROJECTS: Project[] = [
  {
    name: 'CFBTEL SIP-based',
    description:
      'A cross-platform SIP and WebRTC communications product for voice and video calling, delivered with Flutter and native integrations across Android, iOS, and macOS, including CallKit, silent push notifications, and custom telephony plugins.',
    link: 'https://apps.apple.com/us/app/cfbtel/id1597869627',
    linkLabel: 'App Store',
    id: 'project1',
  },
  {
    name: 'Crypto Wallet',
    description:
      'A multi-platform cryptocurrency wallet for Android and iOS built with Trust Wallet Core, covering wallet creation, key management, transaction signing, multi-chain support, and secure Web3 interactions.',
    id: 'project2',
  },
  {
    name: 'Felorida Social Media',
    description:
      'A business-focused social networking app with category-driven discovery and radar-based map exploration to help users find nearby services, communities, and opportunities.',
    link: 'https://apps.apple.com/tr/app/felorida/id6450869735?platform=iphone',
    linkLabel: 'App Store',
    id: 'project3',
  },
  {
    name: 'Decentralized Messenger',
    description:
      'A federated end-to-end encrypted messenger built with Flutter, objectbox-based hashed identity storage, and a dedicated blockchain layer for unique username registration in a lightweight, secure architecture.',
    id: 'project4',
  },
  {
    name: 'MatchMarry',
    description:
      'A real-time matchmaking platform with chat, Firebase notifications, APNs, Google and Facebook authentication, and delivery across Android, iOS, and PWA environments.',
    id: 'project5',
  },
  {
    name: 'AloExpress',
    description:
      'An online taxi platform with dedicated passenger and driver applications for Android and iOS.',
    id: 'project6',
  },
  {
    name: 'Bank Support Chat',
    description:
      'A banking support application with integrated chat and video streaming for branch-level customer service and assistance.',
    id: 'project7',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'CFBTEL Co.',
    title: 'Senior Mobile Developer',
    start: '2021',
    end: '2025',
    description: [
      'Implemented voice calls using Linphone SDK in Swift and Kotlin and integrated them with Flutter.',
      'Built iOS calling workflows with Silent Push notifications and CallKit.',
      'Implemented WebSocket-based messaging and real-time user call state handling.',
      'Developed WebRTC video calling and shipped Android, iOS, macOS, and Windows outputs.',
      'Supported Scrum delivery across sprint planning, backlog grooming, reviews, and retrospectives.',
      'Architected an agent-based AI reporting engine for natural-language-to-SQL automation, secure query execution, and structured analytical summaries.',
    ],
    id: 'work1',
  },
  {
    company: 'Felorida Co.',
    title: 'Mobile Developer',
    start: '2020',
    end: '2021',
    description: [
      'Developed a social network application for businesses on Android and iOS.',
    ],
    id: 'work2',
  },
  {
    company: 'Hitech Innovation Center',
    title: 'Mobile Developer',
    start: '2019',
    end: '2020',
    description: [
      'Built medical applications connected to BLE devices.',
      'Used MQTT for reliable device data transfer.',
      'Integrated TensorFlow models into production workflows.',
    ],
    id: 'work3',
  },
  {
    company: 'Taxi Online',
    title: 'Mobile Developer',
    start: '2017',
    end: '2018',
    description: [
      'Built an online taxi SDK platform for deployment across partner companies.',
      'Delivered native Android and iOS applications with OpenStreetMap integration.',
    ],
    id: 'work4',
  },
  {
    company: 'Freelancer',
    title: 'Mobile Application Developer',
    start: '2014',
    end: '2016',
    description: [
      'Delivered custom mobile applications using native technologies.',
      'Tested applications thoroughly before release to verify stability and issue resolution.',
      'Adopted modern frameworks and architectures aligned with project requirements.',
      'Documented development methodologies for future engineering and support teams.',
    ],
    id: 'work5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/hushmand',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/ahushmand',
  },
]

export const EMAIL = 'amirhushmand@gmail.com'
