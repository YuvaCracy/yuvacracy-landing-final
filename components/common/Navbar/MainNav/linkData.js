const aboutLinksData = {
  title: 'About',
  type: "row",
  row: [
    {
      title: 'The Organization',
      sublinks: [
        { title: 'About YuvaCracy', href: '/org/yuvacracy' },
        { title: 'Code of Conduct', href: '/org/code-of-conduct' },
        { title: 'Social Media Advisory', href: '/org/social-media-advisory' },
        { title: 'YuvaCracy - A Safe Place', href: '/org/yuvacracy-a-safe-place' },
      ]
    },
    {
      title: 'The People',
      sublinks: [
        { title: 'Our Advisors', href: '/people/advisors' },
        { title: 'Our Partners', href: '/people/partners' },
        { title: 'Our Team', href: '/people/our-team' },
      ]
    }
  ]
}

const centresData = {
  title: 'Centres',
  type: "col",
  col: [
    {
      title: "YuvaCracy Centre for Policy Research (YCPR)",
      tooltip: "YuvaCracy Centre for Policy Research",
      href: "/centres/ycpr",
    },
    {
      title: "YuvaCracy Centre for Legal Affairs (YCLA)",
      tooltip: "YuvaCracy Centre for Legal Affairs",
      href: "/centres/ycla",
    }
  ]
}

const CareersData = {
  title: 'Careers',
  type: "col",
  col: [
    {
      title: 'Internships',
      href: '/careers/internships',
    },
    {
      title: 'Work With Us',
      href: '/careers/work-with-us',
    },
    {
      title: 'Write For Us',
      href: '/careers/write-for-us',
    },
    {
      title: 'Career Opportunities',
      href: '/careers/opportunities',
    }
  ]
}

const eventsData = {
  title: 'Events',
  type: "col",
  col: [
    {
      title: 'Upcoming Events',
      href: '/events/upcoming-events',
    },
    {
      title: 'Past Events',
      href: '/events/past-events',
    },
    {
      title: 'Yuvacracy Dialogues',
      href: '/events/yuvacracy-dialogues',
    },
  ]
}

const supportData = {
  title: 'Support Us',
  type: "col",
  col: [
    {
      title: 'Donate',
      href: '/support/donate',
    },
    {
      title: 'Collaboration',
      href: '/support/collaboration',
    },
    {
      title: 'Partner With Us',
      href: '/support/partner-with-us',
    },
  ]
}

export {
  aboutLinksData,
  centresData,
  CareersData,
  eventsData,
  supportData,
}