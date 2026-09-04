const memberProfiles = {
  "01": {
    nameZh: "Jorben Guo",
    nameEn: "Jorben Guo",
    roleZh: "联合创始人兼创意总监",
    roleEn: "CO-FOUNDER & CREATIVE DIRECTOR",
    bioZh: [
      "Jorben 是工作室联合创始人，负责工作室的整体愿景、创意方向与项目战略。他拥有清华大学硕士学位，目前正在香港中文大学攻读博士学位。此前，他曾在腾讯游戏实习，积累了游戏行业及互动内容开发经验。",
      "他的工作横跨艺术、设计、技术与产品开发，带领项目从早期概念走向制作与交付。他关注游戏、沉浸式媒体与实验性叙事，致力于创造将艺术表达与新兴技术相结合的独特互动体验。"
    ],
    bioEn: [
      "Jorben is the co-founder of the studio, responsible for its overall vision, creative direction, and project strategy. He holds a master’s degree from Tsinghua University and is currently pursuing a PhD at The Chinese University of Hong Kong. He previously interned at Tencent Games, gaining experience in the game industry and interactive content development.",
      "Working across art, design, technology, and product development, Jorben guides projects from early concepts through production and delivery. His interests lie in games, immersive media, and experimental storytelling, with a focus on creating distinctive interactive experiences that connect artistic expression with emerging technologies."
    ]
  },
  "02": {
    nameZh: "Singer",
    nameEn: "Singer",
    roleZh: "联合创始人兼技术总监",
    roleEn: "CO-FOUNDER & TECHNICAL DIRECTOR",
    bioZh: [
      "Singer 是工作室联合创始人，负责领导技术研发。他负责制定项目技术方向、设计系统架构，并推动产品从早期原型走向实现、测试与交付。",
      "他的工作处于软件工程、互动媒体与产品开发的交叉领域，专注于为工作室的创意构想建立可靠的技术基础。在《深空接收机》中，他负责桌面应用开发、交互系统、媒体集成、技术原型与发布工程。他尤其关注游戏、AI 驱动的体验，以及能够催生数字叙事新形态的新兴技术。"
    ],
    bioEn: [
      "Singer is a co-founder of the studio and leads its technical development. He is responsible for defining the technical direction of projects, designing system architecture, and guiding products from early prototypes through implementation, testing, and delivery.",
      "Working at the intersection of software engineering, interactive media, and product development, he focuses on building reliable technical foundations for the studio’s creative ideas. For Deep Space Receiver, his work covers desktop application development, interactive systems, media integration, technical prototyping, and release engineering. He is particularly interested in games, AI-powered experiences, and emerging technologies that enable new forms of digital storytelling."
    ]
  },
  "03": {
    nameZh: "Edward Liu（Liu Jiayi）",
    nameEn: "Edward Liu (Liu Jiayi)",
    roleZh: "技术美术",
    roleEn: "TECHNICAL ARTIST",
    email: "jiay181910@gmail.com",
    bioZh: [
      "Edward 目前就读于伦敦大学学院（UCL）巴特莱特建筑学院建筑计算理学硕士项目。他最初接受建筑学训练，随后将重心转向编程与游戏开发。作为一名跨学科通才，他兼具技术洞察力与敏锐的视觉感知，能够从多个角度审视项目。Edward 热爱游戏、设计及各种形式的艺术，主要负责平面设计、UI 设计、世界观构建、角色开发，以及团队中更具想象力的创意。"
    ],
    bioEn: [
      "Edward is currently pursuing an MSc in Architectural Computation at the Bartlett School of Architecture, UCL. Originally trained in architecture, he later shifted his focus toward coding and game development. As a multidisciplinary generalist, he brings both technical insight and a strong visual sensibility to the team, enabling him to evaluate projects from multiple perspectives. Passionate about games, design, and art in all its forms, Edward is primarily responsible for graphic design, UI design, world-building, character development, and the team’s more imaginative ideas."
    ]
  },
  "04": {
    nameZh: "Momo（Mo Yang）",
    nameEn: "Momo (Mo Yang)",
    roleZh: "产品策划与 AIGC 创作者",
    roleEn: "PRODUCT PLANNER & AIGC CREATOR",
    bioZh: [
      "Momo 专注于产品策划与 AI 生成内容。她负责研究用户需求、塑造产品概念、设计原型并创作 AIGC 资产。通过结合以用户为中心的思维与新兴生成式 AI 工具，她帮助团队将早期想法转化为清晰、富有吸引力且可验证的产品体验。"
    ],
    bioEn: [
      "Momo focuses on product planning and AI-generated content. She is responsible for researching user needs, shaping product concepts, designing prototypes, and creating AIGC assets. By combining user-centered thinking with emerging generative-AI tools, she helps transform early-stage ideas into clear, engaging, and testable product experiences."
    ]
  },
  "05": {
    nameZh: "Siyu",
    nameEn: "Siyu",
    roleZh: "Web AR 体验设计师与开发者",
    roleEn: "WEB AR EXPERIENCE DESIGNER & DEVELOPER",
    bioZh: [
      "Siyu 负责《深空接收机》Web AR 模块的体验设计与技术实现。她的工作包括准备 3D 模型、修复材质、UV 展开及纹理烘焙。她还负责二维码入口体验、网页呈现、Cloudflare Pages 部署，以及桌面端和 iPhone 设备上的 AR 测试。目前，她持续推进 Android AR 支持、模型优化、移动端兼容性、加载性能与交互设计。"
    ],
    bioEn: [
      "Siyu leads the experience design and technical implementation of the Web AR component for Deep Space Receiver. Her work includes preparing 3D models, repairing materials, UV unwrapping, and texture baking. She also manages the QR-code entry experience, web presentation, Cloudflare Pages deployment, and AR testing across desktop and iPhone devices. Her ongoing work focuses on Android AR support, model optimization, mobile compatibility, loading performance, and interaction design."
    ]
  }
};

const memberTriggers = [...document.querySelectorAll(".member-trigger[data-member]")];

if (memberTriggers.length) {
  const dialog = document.createElement("dialog");
  dialog.id = "member-profile-dialog";
  dialog.className = "member-profile-dialog";
  dialog.setAttribute("aria-labelledby", "member-profile-title");
  dialog.setAttribute("aria-describedby", "member-profile-statement");
  dialog.innerHTML = `
    <article class="member-profile">
      <button class="member-profile__close" type="button" aria-label="关闭成员简介 / Close member profile" autofocus>CLOSE / ESC</button>
      <p class="member-profile__signal"><i></i><span data-profile-code>FOUNDING MEMBER / 01</span></p>
      <div class="member-profile__identity" id="member-profile-title">
        <h2 class="zh" data-profile-name-zh></h2><h2 class="en" data-profile-name-en></h2>
        <span class="member-profile__role"><span class="zh" data-profile-role-zh></span><span class="en" data-profile-role-en></span></span>
        <dl class="member-profile__meta" data-profile-meta>
          <div><dt>EMAIL</dt><dd><a data-profile-email></a></dd></div>
        </dl>
      </div>
      <div class="member-profile__body">
        <div class="member-profile__statement" id="member-profile-statement">
          <span>PROFILE / 简介</span>
          <div class="zh" data-profile-bio-zh></div>
          <div class="en" data-profile-bio-en></div>
        </div>
      </div>
    </article>`;
  document.body.append(dialog);

  const closeButton = dialog.querySelector(".member-profile__close");
  const profileMeta = dialog.querySelector("[data-profile-meta]");
  let opener = null;

  const renderParagraphs = (container, paragraphs) => {
    container.replaceChildren(...paragraphs.map((copy) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = copy;
      return paragraph;
    }));
  };

  const closeProfile = () => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };

  memberTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-controls", dialog.id);
    trigger.addEventListener("click", () => {
      const profile = memberProfiles[trigger.dataset.member];
      if (!profile) return;
      opener = trigger;
      dialog.querySelector("[data-profile-code]").textContent = `FOUNDING MEMBER / ${trigger.dataset.member}`;
      dialog.querySelector("[data-profile-name-zh]").textContent = profile.nameZh;
      dialog.querySelector("[data-profile-name-en]").textContent = profile.nameEn;
      dialog.querySelector("[data-profile-role-zh]").textContent = profile.roleZh;
      dialog.querySelector("[data-profile-role-en]").textContent = profile.roleEn;
      renderParagraphs(dialog.querySelector("[data-profile-bio-zh]"), profile.bioZh);
      renderParagraphs(dialog.querySelector("[data-profile-bio-en]"), profile.bioEn);

      const hasEmail = Boolean(profile.email);
      profileMeta.hidden = !hasEmail;
      if (hasEmail) {
        const email = dialog.querySelector("[data-profile-email]");
        email.textContent = profile.email;
        email.href = `mailto:${profile.email}`;
      }

      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeProfile);
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeProfile(); });
  dialog.addEventListener("close", () => opener?.focus());
}
