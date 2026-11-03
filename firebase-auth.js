import { getApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
  } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

  const auth = getAuth(getApp());
  const googleProvider = new GoogleAuthProvider();

  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (error) {
    console.warn("Persistensi login lokal tidak tersedia:", error);
  }

  onAuthStateChanged(auth, (user) => {
    const profileLoginButton = document.getElementById("profileLoginButton");
    window.userSignedIn = Boolean(user);
    window.dispatchEvent(new CustomEvent("site-auth-state-change", { detail: { signedIn: Boolean(user) } }));

    const profileAvatar = document.getElementById("videoSidebarAvatar");
    const avatarImage = profileAvatar?.querySelector("img");
    if (profileAvatar && avatarImage) {
      if (user?.photoURL) {
        avatarImage.onerror = () => {
          profileAvatar.classList.remove("has-photo");
          avatarImage.removeAttribute("src");
        };
        avatarImage.src = user.photoURL;
        profileAvatar.classList.add("has-photo");
      } else {
        profileAvatar.classList.remove("has-photo");
        avatarImage.removeAttribute("src");
      }
    }

    if (!user) {
      profileLoginButton.hidden = false;
      return;
    }

    profileLoginButton.hidden = true;
    window.openSite();
  });

  window.loginGoogle = async function () {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const nama = result.user.displayName || result.user.email || "pengunjung";
      document.getElementById("teks").textContent = `Halo, ${nama}`;
    } catch (error) {
      console.error("Login Google gagal:", error);
      alert("Login Google gagal. Coba lagi atau lanjut sebagai Guest.");
    }
  };
