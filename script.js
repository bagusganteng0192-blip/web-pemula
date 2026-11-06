
;
{

        const bgm = document.getElementById("bgm");
        const judulLagu = document.getElementById("judulLagu");
        const tombolMusik = document.getElementById("tombolMusik");

        // Daftar lagu
        const daftarLagu = [
            {
                judul: "Lullaby of the New Moon",
                file: "backsound for web.mp3"
            },
            {
                judul: "Wind Bless on you",
                file: "backsound web via genshin.mp3"
            },
            {
                judul: "Get Out Here",
                file: "backsound get out here.mpeg"
            },
            {
                 judul: "Halvorsen Sunrise",
                 file: "Halvorsen_Sunrise.mpeg"

            },
            {
                judul: "In Your Head",
                file: "InYourHead.mp3"
            },
            {
                judul: "giants",
                file: "giants.mpeg"
            },
            {
                judul: "Love For You",
                file: "love for you.mp3"
            },
        ];

        let laguSekarang = 0;

        // Memilih dan mengganti lagu
        function pilihLagu(index, putar = true) {
            laguSekarang =
                (index + daftarLagu.length) % daftarLagu.length;

            bgm.src = daftarLagu[laguSekarang].file;
            judulLagu.textContent = daftarLagu[laguSekarang].judul;

            if (putar) {
                bgm.play()
                    .then(() => {
                        tombolMusik.textContent = "⏸ Pause Music";
                    })
                    .catch(error => {
                        console.log("Lagu gagal diputar:", error);
                        tombolMusik.textContent = "▶ Play Music";
                    });
            } else {
                bgm.pause();
                tombolMusik.textContent = "▶ Play Music";
            }
        }

        // Play dan Pause
        window.toggleMusic = function toggleMusic() {
            if (bgm.paused) {
                bgm.play()
                    .then(() => {
                        tombolMusik.textContent = "⏸ Pause Music";
                    })
                    .catch(error => {
                        console.log("Lagu gagal diputar:", error);
                    });
            } else {
                bgm.pause();
                tombolMusik.textContent = "▶ Play Music";
            }
        }

        // Lagu berikutnya
        window.laguBerikutnya = function laguBerikutnya() {
            pilihLagu(laguSekarang + 1);
        }

        // Lagu sebelumnya
        window.laguSebelumnya = function laguSebelumnya() {
            pilihLagu(laguSekarang - 1);
        }

        // Volume 0 sampai 100%
        window.setVolume = function setVolume(value) {
            bgm.volume = Number(value) / 100;
        }

        // Otomatis lanjut ketika lagu selesai
        bgm.addEventListener("ended", laguBerikutnya);

        // Pengaturan awal
        setVolume(document.getElementById("volumeMusik").value);
        pilihLagu(0, false);
        const statusMusik = document.getElementById("statusMusik");

// Mengubah tulisan status
function ubahStatus(pesan) {
    statusMusik.textContent = pesan;
}

// Audio mulai dimuat
bgm.addEventListener("loadstart", function () {
    ubahStatus("⏳ Memuat audio...");
});

// Audio siap diputar
bgm.addEventListener("canplay", function () {
    if (bgm.paused) {
        ubahStatus("✓ Audio siap diputar");
    }
});

// Musik sedang diputar
bgm.addEventListener("playing", function () {
    ubahStatus("♫ Musik sedang diputar");
});

// Musik dijeda
bgm.addEventListener("pause", function () {
    if (!bgm.ended && !bgm.error) {
        ubahStatus("Ⅱ Musik dijeda");
    }
});

// Audio sedang buffering
bgm.addEventListener("waiting", function () {
    ubahStatus("⏳ Buffering audio...");
});

// Audio gagal dimuat
bgm.addEventListener("error", function () {
    ubahStatus("✕ Audio gagal dimuat!");
});
    
}


;
{

  window.si = window.si || function () {
    (window.si.q = window.si.q || []).push(arguments);
  };

}


;
{

const feedVideos = [...document.querySelectorAll("video")]
    .filter(video => !video.closest("#gate"));
const videoAudioStorageKey = "site-video-audio";
let savedVideoAudio = null;
try {
    savedVideoAudio = JSON.parse(localStorage.getItem(videoAudioStorageKey) || "null");
} catch {}
const storedVolume = Number(savedVideoAudio?.volume);
let sharedVideoVolume = Number.isFinite(storedVolume)
    ? Math.min(1, Math.max(0, storedVolume))
    : 0.10;
let sharedVideoMuted = typeof savedVideoAudio?.muted === "boolean"
    ? savedVideoAudio.muted
    : true;
let syncingVideoSettings = false;

function syncVideoSettings(sourceVideo) {
    if (syncingVideoSettings) return;
    sharedVideoVolume = sourceVideo.volume;
    sharedVideoMuted = sourceVideo.muted;
    try {
        localStorage.setItem(videoAudioStorageKey, JSON.stringify({
            volume: sharedVideoVolume,
            muted: sharedVideoMuted
        }));
    } catch {}
    syncingVideoSettings = true;
    feedVideos.forEach(video => {
        if (video === sourceVideo) return;
        if (video.volume !== sharedVideoVolume) video.volume = sharedVideoVolume;
        if (video.muted !== sharedVideoMuted) video.muted = sharedVideoMuted;
    });
    syncingVideoSettings = false;
}

feedVideos.forEach(video => {
    video.volume = sharedVideoVolume;
    video.muted = sharedVideoMuted;
    video.addEventListener("volumechange", () => syncVideoSettings(video));
});

}


;
{

const loading = document.getElementById("loading");
const gate = document.getElementById("gate");
const site = document.getElementById("site");
const tombol = document.getElementById("tombol");
const teks = document.getElementById("teks");
window.userSignedIn = false;


/* LOADING */
window.onload = () => {
  setTimeout(() => {
    loading.style.display = "none";
    if (window.userSignedIn) {
      gate.style.display = "none";
      return;
    }
    gate.style.display = "block";
  }, 1500);
};


/* ENTER */
window.openSite = function openSite() {
  teks.textContent = "Welcome to My Website";
  gate.style.opacity = "0";
  gate.style.transition = "2s ease";

  setTimeout(() => {
    gate.style.display = "none";
    site.style.display = "block";
    window.playInitialVideo?.();
  }, 900);
}

}


;
{

const allVideos = document.querySelectorAll("video");

allVideos.forEach(activeVideo => {
    activeVideo.addEventListener("play", () => {
        allVideos.forEach(videoItem => {
            if (videoItem !== activeVideo) videoItem.pause();
        });
    });
});

}


;
{

(() => {
  const collections = [...document.querySelectorAll("details")]
    .map((details) => ({ details, videos: [...details.querySelectorAll("video")] }))
    .filter((collection) => collection.videos.length);
  if (!collections.length) return;

  const feed = document.createElement("section");
  feed.className = "shorts-feed";
  feed.id = "video-feed";
  feed.setAttribute("aria-label", "Feed video");
  feed.innerHTML = `
    <header class="shorts-heading">
      <p class="shorts-eyebrow">VIDEO FEED</p>
      <h2>Jelajahi video</h2>
      <p>Scroll ke bawah untuk lanjut ke video berikutnya.</p>
    </header>
    <nav class="video-sidebar" id="videoSidebar" aria-label="Navigasi video">
      <button class="video-side-link is-active" type="button" data-feed-home><span class="video-side-icon">⌂</span><span>For You</span></button>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20v-1.2a6.5 6.5 0 0 1 13 0V20"/></svg></span><span>Following</span></div>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M2.8 20v-1a6.2 6.2 0 0 1 12.4 0v1M15.3 15.3a4.8 4.8 0 0 1 5.9 4.7"/></svg></span><span>Friends</span></div>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon video-side-live"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg></span><span>LIVE</span></div>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H8l-5 3v-16Z"/><path d="M7 10h10M7 14h7"/></svg></span><span>Messages</span></div>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v13H9l-5 4V4Z"/><path d="M8 10h8M8 13h5"/></svg></span><span>Activity</span></div>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 8v8M8 12h8"/></svg></span><span>Upload</span></div>
      <a class="video-side-link" href="index2.html"><span id="videoSidebarAvatar" class="video-side-icon video-side-profile" aria-hidden="true"><img alt=""></span><span>Profile</span></a>
      <a class="video-side-link" href="index3.html"><span class="video-side-icon">⌕</span><span>Saran & Sosmed</span></a>
      <div class="video-side-link video-side-link-static"><span class="video-side-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></span><span>More</span></div>
    </nav>
    <nav class="video-actions" aria-label="Aksi video">
      <button class="video-action" id="videoLikeButton" type="button" aria-pressed="false" aria-label="Suka video" title="Login untuk menyukai video" disabled>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>
        <span>Suka</span>
      </button>
      <button class="video-action" id="videoCommentLink" type="button" aria-label="Komentar video">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"/></svg>
        <span>Komentar</span>
      </button>
      <button class="video-action" id="videoSaveButton" type="button" aria-pressed="false" aria-label="Simpan video">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h12v17L12 17l-6 3.5v-17Z"/></svg>
        <span>Simpan</span>
      </button>
    </nav>
    <div class="shorts-list" id="shortsList" aria-label="Daftar video"></div>`;

  const clips = [];
  collections.forEach(({ details, videos }) => {
    const heading = details.previousElementSibling;
    const collectionName = heading && /^H[1-3]$/.test(heading.tagName)
      ? heading.textContent.replace(/\s+/g, " ").trim()
      : "Koleksi video";
    if (heading && /^H[1-3]$/.test(heading.tagName)) heading.hidden = true;

    videos.forEach((video) => {
      const nextText = video.nextElementSibling;
      const credit = nextText && /^(P|H[1-6])$/.test(nextText.tagName)
        ? nextText.textContent.replace(/\s+/g, " ").trim()
        : "";
      const posterSrc = video.getAttribute("poster");
      if (posterSrc) {
        video.dataset.posterSrc = posterSrc;
        video.removeAttribute("poster");
      }
      const sourceElements = [...video.querySelectorAll("source")];
      sourceElements.forEach((source) => {
        source.dataset.src = source.getAttribute("src") || "";
        source.removeAttribute("src");
      });
      const directVideoSrc = video.getAttribute("src");
      if (directVideoSrc) {
        video.dataset.videoSrc = directVideoSrc;
        video.removeAttribute("src");
      }
      video.controls = false;
      video.preload = "none";
      video.load();
      video.playsInline = true;
      video.loop = true;

      const item = document.createElement("article");
      item.className = "shorts-item";
      video.addEventListener("click", () => {
        if (video.paused) video.play().catch(() => {});
        else video.pause();
      });
      item.innerHTML = `<div class="shorts-video"><div class="shorts-video-frame"></div></div><div class="shorts-caption"><p class="shorts-collection"></p><p class="shorts-credit"></p><p class="shorts-count"></p></div><div class="shorts-volume-control"><button class="shorts-volume-toggle" type="button" aria-label="Nyalakan suara" title="Nyalakan suara">🔇</button><input class="shorts-volume-slider" type="range" min="0" max="1" step="0.01" aria-label="Volume video"></div><div class="shorts-controls"><input class="shorts-seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="Posisi video"><span class="shorts-time">0:00 / 0:00</span></div>`;
      const videoFrame = item.querySelector(".shorts-video-frame");
      const setFrameRatio = (width, height) => {
        if (width > 0 && height > 0) videoFrame.style.aspectRatio = `${width} / ${height}`;
      };
      video.addEventListener("loadedmetadata", () => setFrameRatio(video.videoWidth, video.videoHeight));
      videoFrame.append(video);
      item.querySelector(".shorts-collection").textContent = collectionName;
      item.querySelector(".shorts-credit").textContent = credit;
      item.querySelector(".shorts-credit").hidden = !credit;
      const seekSlider = item.querySelector(".shorts-seek");
      const timeLabel = item.querySelector(".shorts-time");
      const volumeToggle = item.querySelector(".shorts-volume-toggle");
      const volumeSlider = item.querySelector(".shorts-volume-slider");
      const formatTime = (seconds) => {
        if (!Number.isFinite(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${remainder}`;
      };
      const updateControls = () => {
        const duration = video.duration;
        if (Number.isFinite(duration) && duration > 0) {
          seekSlider.value = String((video.currentTime / duration) * 100);
        }
        timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(duration)}`;
      };
      const updateVolumeControls = () => {
        volumeSlider.value = String(video.volume);
        volumeToggle.textContent = video.muted ? "🔇" : "🔊";
        volumeToggle.setAttribute("aria-label", video.muted ? "Nyalakan suara" : "Matikan suara");
        volumeToggle.title = video.muted ? "Nyalakan suara" : "Matikan suara";
      };
      volumeToggle.addEventListener("click", () => { video.muted = !video.muted; });
      volumeSlider.addEventListener("input", () => {
        video.volume = Number(volumeSlider.value);
        video.muted = video.volume === 0;
      });
      video.addEventListener("volumechange", updateVolumeControls);
      updateVolumeControls();
      seekSlider.addEventListener("input", () => {
        if (Number.isFinite(video.duration) && video.duration > 0) {
          video.currentTime = (Number(seekSlider.value) / 100) * video.duration;
        }
      });
      ["timeupdate", "loadedmetadata", "durationchange"].forEach((eventName) => {
        video.addEventListener(eventName, updateControls);
      });
      updateControls();
      const clipKey = sourceElements[0]?.dataset.src || video.dataset.videoSrc || video.dataset.posterSrc || `${collectionName}-${clips.length}`;
      clips.push({ item, video, sources: sourceElements, collectionName, collectionId: heading?.id || "", key: clipKey });
    });
    details.remove();
  });

  const videoCatalog = Object.fromEntries(clips.map(({ item, video, collectionName, key }) => [key, {
    src: video.dataset.videoSrc || video.querySelector("source")?.dataset.src || "",
    poster: video.dataset.posterSrc || "",
    collectionName,
    credit: item.querySelector(".shorts-credit")?.textContent.trim() || ""
  }]));
  try { localStorage.setItem("site-video-catalog", JSON.stringify(videoCatalog)); } catch {}
  document.body.insertAdjacentElement("afterbegin", feed);

  for (let index = clips.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clips[index], clips[randomIndex]] = [clips[randomIndex], clips[index]];
  }

  const list = document.getElementById("shortsList");
  const requestedVideoKey = new URLSearchParams(window.location.search).get("video");
  const requestedClipIndex = requestedVideoKey ? clips.findIndex(({ key }) => key === requestedVideoKey) : -1;
  clips.forEach(({ item }, index) => {
    item.querySelector(".shorts-count").textContent = `${index + 1} / ${clips.length}`;
    list.append(item);
  });

  const showVideoCount = localStorage.getItem("site-show-video-count") === "true";
  const countToggle = document.createElement("button");
  countToggle.type = "button";
  countToggle.className = "shorts-count-toggle";
  countToggle.setAttribute("aria-pressed", String(showVideoCount));
  countToggle.textContent = showVideoCount ? "Sembunyikan nomor video" : "Tampilkan nomor video";
  countToggle.addEventListener("click", () => {
    const shouldShow = countToggle.getAttribute("aria-pressed") !== "true";
    countToggle.setAttribute("aria-pressed", String(shouldShow));
    countToggle.textContent = shouldShow ? "Sembunyikan nomor video" : "Tampilkan nomor video";
    document.body.classList.toggle("show-video-count", shouldShow);
    try { localStorage.setItem("site-show-video-count", String(shouldShow)); } catch {}
  });
  document.body.classList.toggle("show-video-count", showVideoCount);
  feed.append(countToggle);

  if (requestedClipIndex >= 0) list.scrollTop = requestedClipIndex * list.clientHeight;

  const readClipSet = (storageKey) => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  };
  let likedClipKeys = [];
  let isSignedIn = false;
  let savedClipKeys = readClipSet("site-saved-videos");
  const likeButton = document.getElementById("videoLikeButton");
  const saveButton = document.getElementById("videoSaveButton");
  let activeClipIndex = requestedClipIndex >= 0 ? requestedClipIndex : 0;
  window.playInitialVideo = () => {
    const firstVideo = clips[activeClipIndex]?.video;
    if (!firstVideo) return;
    firstVideo.muted = true;
    firstVideo.playsInline = true;
    firstVideo.play().catch(() => {});
  };
  const updateVideoActions = () => {
    const clip = clips[activeClipIndex];
    if (!clip) return;
    const isLiked = likedClipKeys.includes(clip.key);
    const isSaved = savedClipKeys.includes(clip.key);
    likeButton.setAttribute("aria-pressed", String(isLiked));
    likeButton.classList.toggle("is-active", isLiked);
    saveButton.setAttribute("aria-pressed", String(isSaved));
    saveButton.classList.toggle("is-active", isSaved);
  };
  const syncLikeAccess = (signedIn) => {
    isSignedIn = signedIn === true;
    likeButton.disabled = !isSignedIn;
    likeButton.title = isSignedIn ? "Suka video" : "Login untuk menyukai video";
    likedClipKeys = isSignedIn ? readClipSet("site-liked-videos") : [];
    updateVideoActions();
  };
  window.addEventListener("site-auth-state-change", (event) => {
    syncLikeAccess(event.detail?.signedIn);
  });
  if (typeof window.userSignedIn === "boolean") syncLikeAccess(window.userSignedIn);
  const persistClipSet = (storageKey, values) => {
    try { localStorage.setItem(storageKey, JSON.stringify(values)); } catch {}
  };
  likeButton.addEventListener("click", () => {
    if (!isSignedIn) return;
    const key = clips[activeClipIndex]?.key;
    if (!key) return;
    likedClipKeys = likedClipKeys.includes(key)
      ? likedClipKeys.filter((savedKey) => savedKey !== key)
      : [...likedClipKeys, key];
    persistClipSet("site-liked-videos", likedClipKeys);
    updateVideoActions();
  });
  saveButton.addEventListener("click", () => {
    const key = clips[activeClipIndex]?.key;
    if (!key) return;
    savedClipKeys = savedClipKeys.includes(key)
      ? savedClipKeys.filter((savedKey) => savedKey !== key)
      : [...savedClipKeys, key];
    persistClipSet("site-saved-videos", savedClipKeys);
    updateVideoActions();
  });
  updateVideoActions();

  const sidebar = feed.querySelector(".video-sidebar");
  const sidebarLinks = [...sidebar.querySelectorAll(".video-side-link")];
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mobileNavMedia = window.matchMedia("(max-width: 767px)");
  const setMobileSidebarOpen = (open) => {
    const shouldOpen = mobileNavMedia.matches && open;
    sidebar.classList.toggle("is-open", shouldOpen);
    feed.classList.toggle("mobile-nav-open", shouldOpen);
    sidebar.setAttribute("aria-hidden", String(mobileNavMedia.matches && !shouldOpen));
    sidebar.inert = mobileNavMedia.matches && !shouldOpen;
    mobileNavToggle.setAttribute("aria-expanded", String(shouldOpen));
    mobileNavToggle.setAttribute("aria-label", shouldOpen ? "Tutup menu" : "Buka menu");
  };
  mobileNavToggle.disabled = !mobileNavMedia.matches;
  setMobileSidebarOpen(false);
  mobileNavToggle.addEventListener("click", () => {
    setMobileSidebarOpen(!sidebar.classList.contains("is-open"));
  });
  mobileNavMedia.addEventListener("change", () => {
    mobileNavToggle.disabled = !mobileNavMedia.matches;
    setMobileSidebarOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!mobileNavMedia.matches || !sidebar.classList.contains("is-open")) return;
    if (!sidebar.contains(event.target) && !mobileNavToggle.contains(event.target)) setMobileSidebarOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMobileSidebarOpen(false);
  });
  const setActiveNav = (activeLink) => {
    sidebarLinks.forEach((link) => link.classList.toggle("is-active", link === activeLink));
  };
  sidebar.querySelector("[data-feed-home]").addEventListener("click", (event) => {
    setActiveNav(event.currentTarget);
    setMobileSidebarOpen(false);
    list.scrollTo({ top: 0, behavior: "smooth" });
  });

  let preloadTimer = null;
  const attachClipMedia = (clip, preloadMode = "auto") => {
    const { video, sources = [] } = clip;
    let sourceChanged = false;
    video.preload = preloadMode;
    if (video.dataset.videoSrc && !video.hasAttribute("src")) {
      video.setAttribute("src", video.dataset.videoSrc);
      sourceChanged = true;
    }
    sources.forEach((source) => {
      if (source.dataset.src && !source.hasAttribute("src")) {
        source.setAttribute("src", source.dataset.src);
        sourceChanged = true;
      }
    });
    if (video.dataset.posterSrc && !video.poster) video.poster = video.dataset.posterSrc;
    if (sourceChanged) video.load();
  };
  const releaseClipMedia = (clip) => {
    const { video, sources = [] } = clip;
    const hasAttachedMedia = video.hasAttribute("src") || video.hasAttribute("poster") || sources.some((source) => source.hasAttribute("src"));
    if (!hasAttachedMedia) return;
    video.pause();
    video.removeAttribute("src");
    sources.forEach((source) => source.removeAttribute("src"));
    video.removeAttribute("poster");
    video.preload = "none";
    video.load();
  };
  const updateClipPreloadWindow = (currentIndex) => {
    if (preloadTimer) clearTimeout(preloadTimer);
    clips.forEach((clip, index) => {
      if (index < currentIndex - 5 || index > currentIndex + 3) releaseClipMedia(clip);
    });
    attachClipMedia(clips[currentIndex], "auto");
    const upcoming = [1, 2, 3]
      .map((distance) => ({ clip: clips[currentIndex + distance], distance }))
      .filter(({ clip }) => Boolean(clip));
    let nextIndex = 0;
    const preloadUpcoming = () => {
      if (activeClipIndex !== currentIndex || nextIndex >= upcoming.length) return;
      const { clip, distance } = upcoming[nextIndex++];
      attachClipMedia(clip, distance === 1 ? "auto" : "metadata");
      if (nextIndex < upcoming.length) preloadTimer = setTimeout(preloadUpcoming, 700);
    };
    if (upcoming.length) preloadTimer = setTimeout(preloadUpcoming, 400);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const clip = clips.find((candidate) => candidate.item === entry.target);
      if (!clip) return;
      if (entry.isIntersecting) attachClipMedia(clip, "auto");
      if (entry.isIntersecting && entry.intersectionRatio >= .7) {
        activeClipIndex = clips.indexOf(clip);
        updateClipPreloadWindow(activeClipIndex);
        updateVideoActions();
        clips.forEach(({ video }) => { if (video !== clip.video) video.pause(); });
        clip.video.play().catch(() => {});
      } else {
        clip.video.pause();
      }
    });
  }, { root: list, threshold: [.2, .7] });
  clips.forEach(({ item }) => observer.observe(item));

  document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector(":scope > summary");
    if (summary) summary.remove();
    details.replaceWith(...details.childNodes);
  });
})();

}

