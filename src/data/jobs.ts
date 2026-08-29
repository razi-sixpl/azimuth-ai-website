export type Block =
  | { t: "p"; html: string }
  | { t: "h2"; html: string }
  | { t: "ul"; items: string[] }
  | { t: "ulPlain"; items: string[] }
  | { t: "spacer" };

export type Job = {
  slug: string;
  /** <title> of the original page */
  metaTitle: string;
  /** <h1> in the hero */
  heroTitle: string;
  /** last breadcrumb crumb */
  crumb: string;
  /** card title on /career/ */
  cardTitle: string;
  body: Block[];
};

const ABOUT_AZIMUTH_P =
  "Azimuth AI is building next-generation AI compute platforms and silicon that deliver breakthrough performance, efficiency, and scalability. Our cross-functional hardware, software, and silicon teams collaborate closely to push the boundaries of edge and cloud AI acceleration. We are expanding our SoC Architecture &amp; Design team in Hyderabad to support our rapidly growing AI silicon roadmap.";

const WHY_JOIN: string[] = [
  "Work on cutting-edge silicon shaping the future of AI compute.",
  "Collaborate with top-tier engineers in architecture, design, algorithms, and systems.",
  "Opportunity to influence and architect foundational technologies in our AI SoC roadmap.",
  "Competitive compensation, benefits, and rapid career growth.",
];

const JOBS_1: Job[] = [
  {
    slug: "mid-level-soc-verification-engineer",
    metaTitle: "Mid-Level SoC Verification Engineer",
    heroTitle:
      "Mid-Level SoC Verification Engineer (ARM Architecture &amp; Corestone Experience)",
    crumb: "Mid-Level SoC Verification Engineer",
    cardTitle:
      "Mid-Level SoC Verification Engineer (ARM Architecture &amp; Corestone Experience)",
    body: [
      {
        t: "p",
        html: "<b>Job Requisition: Mid-Level SoC Verification Engineer (ARM Architecture &amp; Corestone Experience)</b>",
      },
      {
        t: "p",
        html: "<b>Location:</b> Hyderabad, India<br /><b>Department:</b> Hardware Engineering – SoC Design<br /><b>Employment Type:</b> Full-Time",
      },
      { t: "h2", html: "<b>About Azimuth AI</b>" },
      { t: "p", html: ABOUT_AZIMUTH_P },
      { t: "h2", html: "<b>Role Overview</b>" },
      {
        t: "p",
        html: "We are seeking a Mid-Level SoC Design Verification Engineer with strong expertise in ARM architecture and hands-on experience working with Arm Corestone reference systems. The role involves supporting subsystem design verification activities across Azimuth AI’s next-generation SoCs.",
      },
      {
        t: "p",
        html: "In addition, we are looking for engineers with a solid background in ASIC SoC Verification, with an emphasis on front-end ASIC design verification techniques and methodologies. You will collaborate with architecture, design and ATE testing teams to bring complex ARM-based subsystems to production-quality readiness.",
      },
      { t: "spacer" },
      { t: "h2", html: "Key Responsibilities" },
      {
        t: "ul",
        items: [
          "Verify ARM-based subsystems derived from Arm Corestone reference packages into Azimuth AI SoCs.",
          "Write DV Test Plans for the SoC.",
          "Collaborate with architecture, design and ATE testing teams.",
          "Work closely with design teams to debug functional issues and ensure high-quality coverage closure.",
          "Write test benches and testcases using System Verilog and UVM methodology.",
          "Help ATE test team cyclize the VCD to generate test patterns.",
          "Help Low Power analysis teams by providing VCD or FSDB files for power aware simulations.",
        ],
      },
      { t: "h2", html: "Required Qualifications" },
      {
        t: "ul",
        items: [
          "Bachelor’s or Master’s degree in Electrical Engineering, Computer Engineering, or related field.",
          "6–8 years of experience in SoC verification.",
          "Strong knowledge of ARM architecture, AMBA protocols (AXI, AHB, APB), and system-level integration.",
          "Hands-on experience with Arm Corestone-based packages or similar ARM reference designs.",
          "Solid experience in ASIC front-end design verification, including test bench development, testcases and testplan development.",
          "Experience in C/C++, Verilog, System Verilog and UVM.",
          "Experience in using Cadence tools for simulation.",
          "Familiarity with gate level simulations.",
          "Strong debugging skills across simulation.",
          "Ability to collaborate in a fast-paced, cross-functional engineering environment.",
        ],
      },
      { t: "h2", html: "Preferred Qualifications" },
      {
        t: "ul",
        items: [
          "Exposure to AI/ML accelerator-based SoCs is a plus.",
          "Advanced degrees (B.Tech/M.Tech/BE/ME/M.Sc/M.S) in Computer Science or Electronics/Electrical Engineering.",
        ],
      },
      { t: "h2", html: "Why Join Azimuth AI" },
      { t: "ul", items: WHY_JOIN },
    ],
  },
  {
    slug: "embedded-firmware-architect",
    metaTitle: "Embedded Firmware Architect",
    heroTitle: "Firmware Architect",
    crumb: "Firmware Architect",
    cardTitle: "Embedded Firmware Architect",
    body: [
      { t: "p", html: "<b>Firmware Architect</b>" },
      { t: "p", html: "Location: Hyderabad, Telangana, India" },
      { t: "h2", html: "<b>About Azimuth AI</b>" },
      {
        t: "p",
        html: "At Azimuth AI, we’re redefining the boundaries of embedded intelligence. We build Software-Defined Custom SoCs that power the next generation of AI-enabled embedded systems — delivering breakthrough efficiency, configurability, and performance at the edge.",
      },
      {
        t: "p",
        html: "Our mixed-signal (analog + digital) SoCs are built on ARM-based compute architectures, seamlessly integrating Azimuth AI’s proprietary Neural Network Engine (NNE) alongside leading third-party IPs. These chips enable powerful, software-defined AI workloads across applications such as autonomous systems, industrial automation, intelligent sensors, and connected devices.<br />We are a team of builders, innovators, and system thinkers who believe that the future of AI isn’t confined to the cloud — it lives everywhere intelligence is needed.",
      },
      { t: "h2", html: "<b>The Role</b>" },
      {
        t: "p",
        html: "Azimuth AI is looking for a Firmware Architect in our Hyderabad team, which plays a critical role in the definition and implementation of our newest products and responsible for delivering all MCU drivers and services, RTOS support, radio APIs, and embedded security features.",
      },
      { t: "spacer" },
      { t: "h2", html: "<b>Responsibilities</b>" },
      {
        t: "ul",
        items: [
          "Evaluating the architectures for the new features and solutions in Firmware",
          "Define firmware requirements for requirement management tool and run feasibility studies",
          "Guardrailing the technical solutions for the firmware including the tools used for development",
          "Ensuring the architecture documentation is in place with local and global teams also in respect to platform",
          "Cross functional collaboration to ensure the timely delivery of high-quality firmware releases",
          "Create bridges between organizations and their architecture helping them see the big picture and delivering an integrated landscape of products",
          "Conduct detailed code reviews and enforce robust testing and CI/CD processes",
          "Lead hiring, mentoring, and capability development within the firmware team",
        ],
      },
      { t: "h2", html: "Skills needed" },
      {
        t: "ul",
        items: [
          "Detailed understanding and hands-on experience in software development lifecycle and methodologies",
          "Proficient in C/C++ programming for embedded systems",
          "Any scripting language like Python knowledge is an advantage",
          "Proven ability to work with cross-functional teams in different locations",
          "Strong background in highly resource-constrained, real-time, embedded environments.",
          "Experience with ARM cores, writing and optimizing device drivers for MCU peripherals (UART, I2C, SPI, GPIO, RTC, DMA, Watchdog, etc.)",
          "Experience with one or more RTOS – Free RTOS preferred",
          "Excellent communication skills and ability to work in a team as well as an individual",
        ],
      },
      { t: "h2", html: "Education and/or Experience" },
      {
        t: "ul",
        items: [
          "10+ years of hands-on embedded software development",
          "B.Tech/M.Tech/BE/ME/M.Sc/M.S in Computer Science or Electronics/Electrical engineering",
        ],
      },
      { t: "h2", html: "The following qualifications will be considered a plus" },
      {
        t: "ul",
        items: [
          "Experience working at a semiconductor product company",
          "Basic understanding of hardware IP architecture, development and verification",
          "Experience with AI and ML on embedded platforms",
          "Radio firmware and Bluetooth experience at the PHY/MAC layers",
        ],
      },
    ],
  },
  {
    slug: "mid-level-soc-design-engineer",
    metaTitle: "Mid-Level SoC Design Engineer",
    heroTitle:
      "Mid-Level SoC Design Engineer (ARM Architecture &amp; Corestone Experience)",
    crumb: "Mid-Level SoC Design Engineer",
    cardTitle:
      "Mid-Level SoC Design Engineer (ARM Architecture &amp; Corestone Experience)",
    body: [
      {
        t: "p",
        html: "<b>Job Requisition: Mid-Level SoC Design Engineer (ARM Architecture &amp; Corestone Experience)</b>",
      },
      {
        t: "p",
        html: "<b>Location:</b> Hyderabad, India<br /><b>Department:</b> Hardware Engineering – SoC Design<br /><b>Employment Type:</b> Full-Time",
      },
      { t: "h2", html: "<b>About Azimuth AI</b>" },
      { t: "p", html: ABOUT_AZIMUTH_P },
      { t: "h2", html: "<b>Role Overview</b>" },
      {
        t: "p",
        html: "We are seeking a Mid-Level SoC Design Engineer with strong expertise in ARM architecture and hands-on experience working with Arm Corestone reference systems. The role involves supporting subsystem design, integration, and optimization activities across Azimuth AI’s next-generation SoCs.",
      },
      {
        t: "p",
        html: "In addition, we are looking for engineers with a solid background in ASIC SoC and RTL design, with an emphasis on front-end ASIC design techniques and methodologies. You will collaborate with architecture, verification, and physical design teams to bring complex ARM-based subsystems to production-quality readiness.",
      },
      { t: "spacer" },
      { t: "h2", html: "Key Responsibilities" },
      {
        t: "ul",
        items: [
          "Design and integrate ARM-based subsystems derived from Arm Corestone reference packages into Azimuth AI SoCs.",
          "Implement and modify RTL for CPU subsystems, AMBA interconnects, memory controllers, and peripheral IP.",
          "Collaborate with architecture teams on feature definition, microarchitecture updates, and performance targets.",
          "Work closely with verification teams to debug functional issues and ensure high-quality coverage closure.",
          "Support synthesis, timing analysis, and physical design teams during SoC execution.",
          "Drive documentation, design reviews, and bring-up support for early silicon and emulation platforms.",
          "Contribute to methodology improvements for subsystem integration and design scalability.",
        ],
      },
      { t: "h2", html: "Required Qualifications" },
      {
        t: "ul",
        items: [
          "Bachelor’s or Master’s degree in Electrical Engineering, Computer Engineering, or related field.",
          "6–11 years of experience in SoC or subsystem design.",
          "Strong knowledge of ARM architecture, AMBA protocols (AXI, AHB, APB), and system-level integration.",
          "Hands-on experience with Arm Corestone-based packages or similar ARM reference designs.",
          "Solid experience in ASIC front-end design, including RTL development and integration flows.",
          "Experience in ASIC synthesis, Clock Domain Crossing (CDC), Reset Domain Crossing (RDC) techniques using Cadence Tools.",
          "Proficiency in Static Timing Analysis using Cadence tools.",
          "Familiarity with low-power design techniques, UPF, and cadence low power tools (a plus).",
          "FPGA prototyping experience is desirable.",
          "Strong debugging skills across simulation, lint, CDC, and synthesis environments.",
          "Ability to collaborate in a fast-paced, cross-functional engineering environment.",
        ],
      },
      { t: "h2", html: "Preferred Qualifications" },
      {
        t: "ul",
        items: [
          "Knowledge of low-power design techniques and clock/power domain architecture.",
          "Exposure to AI/ML accelerator-based SoCs is a plus.",
          "Familiarity with FPGA prototyping, emulation platforms, or early silicon bring-up.",
          "Advanced degrees (B.Tech/M.Tech/BE/ME/M.Sc/M.S) in Computer Science or Electronics/Electrical Engineering.",
        ],
      },
      { t: "h2", html: "Why Join Azimuth AI" },
      { t: "ul", items: WHY_JOIN },
    ],
  },
];

const JOBS_2: Job[] = [
  {
    slug: "senior-embedded-software-engineer",
    metaTitle: "Senior Embedded Software Engineer",
    heroTitle: "Senior Embedded Software Engineer",
    crumb: "Senior Embedded Software Engineer",
    cardTitle: "Senior Embedded Software Engineer",
    body: [
      { t: "p", html: "<b>Senior Embedded Software Engineer</b>" },
      { t: "p", html: "<b>Location:</b> Hyderabad, Telangana, India" },
      { t: "h2", html: "<b>Role Overview</b>" },
      {
        t: "p",
        html: "Azimuth AI is seeking a highly skilled Senior Embedded Software Engineer to join our Hyderabad engineering team. The team is responsible for the design and development of next-generation embedded platforms, including MCU drivers, RTOS integration, RF communication stacks, radio APIs, FOTA (Firmware Over-The-Air) solutions, embedded security features, and system-level firmware components.",
      },
      {
        t: "p",
        html: "The ideal candidate will have 10–15 years of hands-on embedded software development experience with strong expertise in C/C++, ARM-based microcontrollers, RTOS, wireless communication protocols, and firmware architecture. This role requires a strong technical leader who can drive firmware development from concept through production while collaborating closely with hardware, validation, product, and customer teams.",
      },
      { t: "h2", html: "<b>Key Responsibilities</b>" },
      {
        t: "ul",
        items: [
          "Design, develop, and maintain embedded firmware and software modules for MCU-based platforms.",
          "Lead the development of peripheral drivers, middleware, and platform services.",
          "Design and implement secure FOTA/OTA update mechanisms, including bootloaders, image validation, rollback, fail-safe recovery, and firmware lifecycle management.",
          "Architect scalable, reusable, and maintainable embedded software solutions.",
          "Develop, integrate, and optimize RF communication stacks and wireless protocols.",
          "Work closely with hardware, RF, and system teams to debug and optimize wireless performance.",
          "Analyze protocol-level issues and drive interoperability testing across multiple device ecosystems.",
          "Develop and maintain embedded security features including secure boot, firmware authentication, encryption, and key management.",
          "Optimize software for performance, memory footprint, power consumption, and reliability in resource-constrained environments.",
          "Troubleshoot and resolve complex system-level issues involving hardware, firmware, RTOS, and wireless communication.",
          "Conduct design reviews, code reviews, and ensure adherence to software quality standards and best practices.",
          "Mentor engineers and provide technical leadership across firmware projects.",
          "Collaborate with customers and internal stakeholders to enable product use cases and resolve technical challenges.",
          "Drive software quality initiatives through unit testing, automation, continuous integration, and release processes.",
        ],
      },
      { t: "h2", html: "Required Skills &amp; Experience" },
      {
        t: "ul",
        items: [
          "10–15 years of hands-on embedded software/firmware development experience.",
          "Expert proficiency in C and C++ programming.",
          "Strong understanding of embedded software development lifecycle, software architecture, and development methodologies.",
          "Extensive experience with ARM Cortex-M/A based microcontrollers and embedded systems.",
          "Deep understanding of real-time embedded systems and resource-constrained environments.",
          "Strong experience with FreeRTOS or similar RTOS platforms.",
          "Hands-on experience developing and optimizing device drivers for:",
        ],
      },
      {
        t: "ulPlain",
        items: ["UART", "SPI", "I2C", "GPIO", "DMA", "RTC", "Timers", "Watchdog", "ADC/DAC"],
      },
      {
        t: "ul",
        items: [
          "Experience with interrupt handling, memory management, low-level firmware development, and bootloader design.",
          "Strong experience in designing and implementing FOTA/OTA firmware update solutions, including secure firmware upgrades, image management, rollback mechanisms, and recovery procedures.",
          "Experience with embedded security concepts including:",
        ],
      },
      {
        t: "ulPlain",
        items: [
          "Secure Boot",
          "Firmware Signing",
          "Encryption",
          "Authentication",
          "Secure Key Storage",
        ],
      },
      {
        t: "ul",
        items: [
          "Strong understanding of RF communication systems and wireless protocol stacks from PHY to Application layers.",
          "Experience with wireless technologies such as:",
        ],
      },
      {
        t: "ulPlain",
        items: [
          "Bluetooth Classic",
          "Bluetooth Low Energy (BLE)",
          "IEEE 802.15.4",
          "Zigbee",
          "Wi-Fi",
          "Proprietary Sub-GHz RF protocols",
        ],
      },
      { t: "ul", items: ["Strong knowledge of:"] },
      {
        t: "ulPlain",
        items: [
          "PHY, MAC, Network, Transport, and Application Layers",
          "Radio Resource Management",
          "RF Coexistence and Interference Mitigation",
          "Wireless Security Mechanisms",
          "Pairing, Bonding, and Device Provisioning",
          "Wireless Performance Optimization",
          "Low-Power Wireless Design",
        ],
      },
      {
        t: "ul",
        items: [
          "Experience debugging RF communication issues using protocol analyzers, packet sniffers, oscilloscopes, logic analyzers, and RF test equipment.",
          "Strong analytical, debugging, and problem-solving skills.",
          "Experience working with geographically distributed and cross-functional engineering teams.",
          "Excellent verbal and written communication skills.",
        ],
      },
      { t: "h2", html: "Preferred Qualifications" },
      {
        t: "ul",
        items: [
          "Experience working in semiconductor, wireless connectivity, IoT, or product-based organizations.",
          "Experience developing radio firmware, wireless stacks, or connectivity solutions.",
          "Experience with Bluetooth SIG-qualified products and wireless certification processes.",
          "Familiarity with RF certification requirements such as FCC, CE, ETSI, and RED.",
          "Strong understanding of RF front-end concepts, antenna characteristics, coexistence mechanisms, and wireless performance tuning.",
          "Experience with embedded Linux environments and connectivity frameworks.",
          "Experience with AI/ML deployment and optimization on embedded platforms.",
        ],
      },
      { t: "h2", html: "Education" },
      {
        t: "ul",
        items: [
          "B.E./B.Tech./M.E./M.Tech./M.S./M.Sc. in Computer Science, Electronics, Electrical Engineering, Embedded Systems, or a related field.",
        ],
      },
      { t: "h2", html: "What Success Looks Like" },
      {
        t: "ul",
        items: [
          "Deliver robust, scalable, and production-ready embedded firmware solutions.",
          "Drive successful integration of wireless connectivity and FOTA capabilities across products.",
          "Improve firmware quality, security, maintainability, and performance.",
          "Provide technical leadership and mentorship to engineering teams.",
          "Collaborate effectively across hardware, software, RF, validation, and customer-facing teams to achieve product milestones.",
        ],
      },
      {
        t: "p",
        html: "<b>Experience Required:</b> 10–15 Years<br /><b>Employment Type:</b> Full-Time<br /><b>Location:</b> Hyderabad, Telangana, India",
      },
    ],
  },
  {
    slug: "system-of-chip",
    metaTitle: "System of Chip (SoC)",
    heroTitle: "system on chip (Soc) architect",
    crumb: "System On Cip (Soc) Architect",
    cardTitle: "System On Chip (Soc) Architect",
    body: [
      {
        t: "p",
        html: "The System On Chip (Soc) Architect role is a technical leadership role within Azimuth AI Engineering team. This role is expected to have wide ranging contributions in:",
      },
      {
        t: "ul",
        items: [
          "Solutions engineering - define and develop solutions to customer mission needs using existing and new components",
          "Product/SOC Architecture and Definition",
          "SOC and IP microarchitecture",
        ],
      },
      { t: "h2", html: "Specific Duties include:" },
      {
        t: "p",
        html: "• Meet with current and prospective customers to understand their mission goals and develop solutions.<br />• Develop architectural definition of upcoming products to include IP, Fabric and SOC architectures.<br />• Oversee definition, design, verification, and documentation for SoC development.<br />• Contribute to the micro-architectural features and specifications.<br />• Define module interfaces and formats for simulation.<br />• Perform RTL logic design and simulation for functional units, subsystems, and SoC full chip designs.<br />• Balance design trade-offs with modularity, scalability, DFX requirements, chassis compliance, power, area, and performance.<br />• Drive inter-organization collaboration, provide technical guidance, and mentor engineers.<br />• Utilize excellent written and verbal communications skills to collaborate internally across Azimuth AI and with external customers.",
      },
      { t: "h2", html: "Qualifications" },
      {
        t: "p",
        html: "Candidates must possess the minimum education requirements noted below and minimum required qualifications to be initially considered for this position.",
      },
      {
        t: "p",
        html: "Bachelor’s degree in Electrical / Computer Engineering, Compute Science, or related field with 12+ years of relevant experience, or a Master’s degree with 10+ years of relevant experience.",
      },
      {
        t: "p",
        html: "• Experience in computer architecture and experience in architectural specifications.<br />• Experience integrating components or IP blocks from internal and external providers.<br />• Experience in RTL/logic design on ASIC’s, IP blocks or SOC’s using System Verilog RTL coding.",
      },
      { t: "spacer" },
      { t: "h2", html: "Preferred Qualifications:" },
      {
        t: "ul",
        items: [
          "Experience interfacing with and supporting external customers.",
          "Experience working with embedded products employing analog and/or RF IPs.",
          "Experience in Platform Architecture.",
          "Programming in C++, Perl and Assembly Algorithms.",
          "Proprietary and 3rd-party RF logic design tools familiarity.",
        ],
      },
    ],
  },
  {
    slug: "senior-analog-design-engineer",
    metaTitle: "Senior Analog Design Engineer",
    heroTitle: "Senior SoC Analog Design Engineer",
    crumb: "Senior Analog Design Engineer",
    cardTitle: "Senior Analog Design Engineer",
    body: [
      {
        t: "p",
        html: "<b>Job Requisition:</b> Senior SoC Analog Design Engineer<br /><b>Location:</b> Hyderabad, India<br /><b>Department:</b> Hardware Engineering – SoC Design<br /><b>Employment Type:</b> Full-Time",
      },
      { t: "h2", html: "About Azimuth AI" },
      { t: "p", html: ABOUT_AZIMUTH_P },
      { t: "h2", html: "Role Overview" },
      {
        t: "p",
        html: "We are seeking a Senior SoC Analog Design Engineer with strong expertise. The role involves supporting design, integration, and optimization activities across Azimuth AI’s next-generation SoCs.<br />Looking for 10+ years of hands-on experience in highly integrated Ultra Deep Sub-Micron CMOS analog mixed signal design.",
      },
      { t: "h2", html: "Key Responsibilities" },
      { t: "spacer" },
      {
        t: "ul",
        items: [
          "Will be involved in all stages of product development from product definition to trouble shooting production yield issues.",
          "Implement and modify Analog IPs.",
          "Collaborate with architecture teams on feature definition, microarchitecture updates, and performance targets.",
          "Contribute to methodology improvements for subsystem integration and design scalability.",
          "Will be an analog chip lead and be responsible for spec definition, IP design, behavioral models, Wreal models, DFT requirements definition, pad-ring design, wiring diagram, floorplan, design for reliability – ESD, latchup robustness, ensuring no floating nodes and no over-voltage issues.",
        ],
      },
      { t: "h2", html: "Required Qualifications" },
      {
        t: "ul",
        items: [
          "Bachelor’s or Master’s degree in Electrical Engineering, Computer Engineering, or related field.",
          "10+ years of experience in Analog Mixed signal design.",
          "Hands on design experience in analog IPs like PLLs, oscillators, bandgap, LDOs, IOs, Serdes, etc.",
          "Hands on experience in Analog top level simulations and AMS simulations.",
          "Hands on experience in engineering bench validation board design, bench validation, ATE test program support and debug.",
          "Experience with debugging silicon issues both IP level/System level and production yield issues.",
          "Experienced with ESD, latchup, HTOL, HAST teams to define the requirements and applications.",
          "Experience with failure analysis of issues reported from qual.",
          "Ability to collaborate in a fast-paced, cross-functional engineering environment.",
        ],
      },
      { t: "h2", html: "Preferred Qualifications" },
      {
        t: "ul",
        items: [
          "Knowledge of low-power design techniques.",
          "Exposure to AI/ML accelerator-based SoCs is a plus.",
          "Advanced degrees (B.Tech/M.Tech/BE/ME/M.Sc/M.S) in Computer Science or Electronics/Electrical Engineering.",
        ],
      },
      { t: "h2", html: "Why Join Azimuth AI" },
      { t: "ul", items: WHY_JOIN },
    ],
  },
];

/** Order matches the card order on /career/ */
export const JOBS: Job[] = [
  JOBS_1[0], // Mid-Level SoC Verification Engineer
  JOBS_1[1], // Embedded Firmware Architect
  JOBS_1[2], // Mid-Level SoC Design Engineer
  JOBS_2[0], // Senior Embedded Software Engineer
  JOBS_2[1], // System On Chip (SoC) Architect
  JOBS_2[2], // Senior Analog Design Engineer
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
