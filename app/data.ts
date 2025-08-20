type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  school: string
  start: string
  end: string
  description?: string
  id: string
  image?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Ứng dụng AI trong lập trình ứng dụng Web',
    description:
      'Sử dụng AI trong việc lập trình, tối ưu hóa quy trình phát triển ứng dụng Web.',
    link: 'https://pro.motion-primitives.com/',
    video:
      '/AI_trong_lap_trinh_web.png',
    id: 'project1',
  },
  {
    name: 'Ứng dụng AI trong công việc',
    description: 'Sử dụng Generative AI để tối ưu hóa quy trình công việc.',
    link: 'https://motion-primitives.com/',
    video:
      '/AI_trong_cong_viec.png',
    id: 'project2',
  },
  {
    name: 'Ứng dụng AI trong cuộc sống',
    description: 'Sử dụng AI để học tập những điều mới mẻ mỗi ngày.',
    link: 'https://motion-primitives.com/',
    video: '/AI_in_life.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project3',
  },
  {
    name: 'Ứng dụng AI trong tự động phê duyệt hình ảnh bảo dưỡng nhà trạm',
    description: 'Ứng dụng AI trong tự động phê duyệt hình ảnh bảo dưỡng nhà trạm Viettel',
    link: 'https://motion-primitives.com/',
    video: '/AI_trong_pda_wo_mr.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project4',
  },
  {
    name: 'Triển khai cắt chuyển, vận hành hệ thống tính cước',
    description: 'Unitel - Viettel Lào',
    link: 'https://motion-primitives.com/',
    video: '/Cutover_OCS.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project5',
  },
  {
    name: 'Triển khai cắt chuyển, vận hành hệ thống thẻ cào di động',
    description: 'Unitel - Viettel Lào',
    link: 'https://motion-primitives.com/',
    video: '/Cutover_VC.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project6',
  },
  {
    name: 'Triển khai, vận hành hệ thống giám sát OAM cho hệ thống OCS, VC, SMSC, PCRF, CRBT',
    description: 'Unitel - Viettel Lào',
    link: 'https://motion-primitives.com/',
    video: '/unitel_oam.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project7',
  },
  {
    name: 'Triển khai cắt chuyển, vận hành hệ thống USSDGW',
    description: 'Unitel - Viettel Lào',
    link: 'https://motion-primitives.com/',
    video: '/unitel_ussdgw.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project8',
  },
  {
    name: 'Triển khai áp dụng module tự động ứng cứu thông tin xử lý sự cố trên hệ thống OCS',
    description: 'Unitel - Viettel Lào',
    link: 'https://motion-primitives.com/',
    video: '/unitel_xlsc_ocs.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project9',
  },
  {
    name: 'Triển khai áp dụng module tự động gộp cell và check LVS, DRC',
    description: 'Dolphin Technology Vietnam Center',
    link: 'https://motion-primitives.com/',
    video: '/dtvc_peaceship.png', // Tạo ảnh với kích thước 1920x1080, tỷ lệ 16:9
    id: 'project10',
  },
  {
    name: 'Thiết kế thư viện Standard Cell TSMC 28nm và 16nm',
    description: 'Dolphin Technology Vietnam Center',
    link: 'https://dolphin-tech.com/',
    video: '/tsmc_standard_cell.png',
    id: 'project11',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Viettel',
    title: 'Kỹ sư điện tử viễn thông',
    start: '2014',
    end: '2019',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Dolphin Technology',
    title: 'Kỹ sư thiết kế vi mạch',
    start: '2013',
    end: '2014',
    link: 'https://ibelick.com',
    id: 'work3',
  },
  {
    company: 'EDABK Lab - Đại học Bách Khoa Hà Nội',
    title: 'Nghiên cứu sinh',
    start: '2010',
    end: '2013',
    link: 'https://ibelick.com',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Meta AI tiến bước đầu sang siêu trí tuệ',
    description: 'Meta vừa bước một chân chậm rãi nhưng chắc vào vùng đất gyi trí tuệ nhân tạo siêu việt (ASI). CEO Mark Zuckerberg xác nhận rằng những hệ thống AI mới nhất của công ty đang bắt đầu tự cải thiện mà không cần con người can thiệp — một dấu hiệu đầu tiên cho khả năng ASI vươn xa hơn cả trí tuệ con người. Ông nhấn mạnh bước tiến này tuy nhỏ nhưng không thể ngó lơ, và do tiềm năng biến đổi xã hội cực lớn, Meta sẽ thận trọng hơn trong việc công bố các hệ thống mạnh nhất ra công chúng.',
    link: 'https://www.livescience.com/technology/artificial-intelligence/meta-ai-takes-first-step-to-superintelligence-and-zuckerberg-will-no-longer-release-the-most-powerful-systems-to-the-public?utm_source=chatgpt.com',
    uid: 'blog-1',
  },
  {
    title: 'Claude Opus 4 đánh bại GPT-4.1: 72.5 % SWE-bench và cuộc chạy đua marathon 7 tiếng liên tục',
    description:
      'Anthropic vừa trình làng dòng Claude 4 gồm hai mẫu mới — Opus 4 và Sonnet 4 — trong một bước tiến đáng kể, nhất là cho các lập trình viên và kỹ sư phần mềm. Trong đó, Claude Opus 4 được xem như “người khổng lồ mới trong làng lập trình AI”',
    link: 'https://www.itpro.com/software/development/anthropic-claude-opus-4-software-development?utm_source=chatgpt.com',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://hust.edu.vn/',
  },
  {
    label: 'LinkedIn',
    link: 'https://hust.edu.vn/',
  },
  {
    label: 'Instagram',
    link: 'https://hust.edu.vn/',
  },
]

export const EMAIL = 'alexbkhn@gmail.com'

export const EDUCATION: Education[] = [
  {
    school: 'Trường Đại học Bách Khoa Hà Nội',
    start: '2008',
    end: '2013',
    description: 'Sinh viên',
    id: 'education1',
    image: '/logo_bachkhoa.png',
  },
  {
    school: 'Trường THPT Chu Văn An - Hà Nội',
    start: '2005',
    end: '2008',
    description: 'Học sinh',
    id: 'education2',
    image: '/logo_cva_hn.jpeg',
  },
  {
    school: 'Trường THCS Giảng Võ - Hà Nội',
    start: '2001',
    end: '2005',
    description: 'Học sinh',
    id: 'education3',
    image: '/logo_gv_hn.jpg',
  },
  {
    school: 'Trường Tiểu học Phan Chu Trinh - Hà Nội',
    start: '1996',
    end: '2001',
    description: 'Học sinh',
    id: 'education4',
    image: '/logo_pct.png',
  },
]
