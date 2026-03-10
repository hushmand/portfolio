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
  role: 'Senior Mobile / Full-Stack Software Engineer',
  birthYear: '1996',
  summary:
    'Full-stack, product-oriented software engineer with 12+ years of experience, primarily focused on mobile development with Flutter, Android, and iOS. Experienced in building end-to-end products across mobile, backend, web dashboards, and integration layers, with strong hands-on work in Go, WebSocket, gRPC, WebRTC, telecom/PBX systems, and cloud-connected services. Proven background in communication apps, fintech and wallet flows, operational tools, device integrations, and production-focused software delivery.',
}

export const SKILLS: string[] = [
  'Languages: Dart, Go, JavaScript, TypeScript, SQL, Bash, Protocol Buffers',
  'Mobile & Cross-Platform: Flutter, Android, iOS, Flutter Web, desktop-oriented Flutter integrations',
  'Flutter Ecosystem: GetX, Provider, BLoC, flutter_bloc, Riverpod, GetIt, go_router, build_runner, json_serializable, sqflite, ObjectBox, shared_preferences, flutter_secure_storage',
  'Backend: Go, Fiber, REST APIs, Gorilla WebSocket, PGX, GORM, JWT, validation, structured logging',
  'Real-Time & Communication: WebSocket, gRPC, gRPC-web, WebRTC, streaming systems, chat systems',
  'Telecom / PBX: Asterisk, AMI, ARI, SIP-related workflows, click-to-call, queue monitoring, PBX reporting',
  'Databases: PostgreSQL, MySQL, MongoDB, Cassandra, SQLite, ObjectBox, Redis',
  'Infra / Cloud: HAProxy, Ansible, reverse proxy, TLS, HTTP/2, CORS, Docker, AWS S3, Firebase, FCM, APNs',
  'Mobile Integrations: Bluetooth/BLE, camera, maps, geolocation, webview, push notifications, local notifications, biometrics, file/media handling, audio/video',
  'AI & Emerging Tech: Agentic AI systems, local LLM integrations, OpenAI API integrations, on-device AI experimentation, whisper.cpp-related exploration',
  'Fintech / Security: web3dart, secure storage, wallet/key management, biometric authentication, encryption-related workflows',
]

export const PROJECTS: Project[] = [
  {
    name: 'OPRIX',
    description:
      'A full-stack PBX and business communications platform with a Flutter client and a Go backend built around Asterisk, gRPC, WebSocket, admin APIs, and reporting services. It supports real-time communication workflows, operational dashboards, and user-facing features across telephony, messaging, and backend service orchestration.',
    id: 'project8',
  },
  {
    name: 'CFBTEL SIP-based',
    description:
      'A full-stack VoIP softphone solution with a Flutter-based client for voice calling, chat, meetings, and cross-platform communication, backed by telephony services integrated with Asterisk, gRPC, and WebSocket infrastructure. It delivers end-to-end VoIP workflows across call handling, signaling, messaging, and real-time communication services.',
    link: 'https://apps.apple.com/us/app/cfbtel/id1597869627',
    linkLabel: 'App Store',
    id: 'project9',
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
    title: 'Senior Mobile / Full-Stack Developer',
    start: '2021',
    end: '2025',
    description: [
      'Designed and delivered cross-platform communication solutions across Flutter, Swift, and Kotlin, including voice calling integrations with Linphone SDK.',
      'Implemented iOS VoIP calling workflows using Silent Push notifications and CallKit.',
      'Built real-time messaging and user call-state features using WebSocket-based architectures across client and backend layers.',
      'Developed and shipped WebRTC-based video calling features for Android, iOS, macOS, and Windows.',
      'Contributed to backend service development for communication workflows, reporting systems, and operational tools.',
      'Worked on Oprix and reporting platforms end-to-end, covering mobile integration, backend implementation, real-time data handling, and reporting-related services.',
      'Architected an agent-based AI reporting engine for natural-language-to-SQL automation, secure query execution, and structured analytical summaries.',
      'Participated in Scrum ceremonies including sprint planning, backlog refinement, reviews, and retrospectives.',
    ],
    id: 'work1',
  },
  {
    company: 'Hitech Innovation Center',
    title: 'Senior Mobile / Full-Stack Developer',
    start: '2021',
    end: '2021',
    description: [
      'A suite of full-stack IoT and smart-device products built with Flutter on the frontend and backend-integrated service architectures for data exchange, monitoring, and operational workflows.',
      'The projects cover mobile applications for health and device-connected scenarios, with capabilities including BLE/Bluetooth, sensors, camera integration, local/offline storage, notifications, API communication, and embedded ML features for hardware-assisted user experiences.'
    ],
    id: 'work2',
  },
  {
    company: 'Felorida Co.',
    title: 'Mobile Developer',
    start: '2020',
    end: '2020',
    description: [
      'Developed a social network application for businesses on Android and iOS.',
    ],
    id: 'work3',
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
    id: 'work4',
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
    id: 'work5',
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
    id: 'work6',
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
