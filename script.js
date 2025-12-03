// DOM要素の取得
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const ctaButton = document.getElementById('ctaButton');

// モーダルを開く
function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // 背景のスクロールを無効化
}

// モーダルを閉じる
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // 背景のスクロールを有効化
}

// イベントリスナーの設定
if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // CTAボタン押下で閉じる
        closeModal();
        // 実際の実装では、ここで次の画面（1文入力画面）に遷移する
        console.log('CTAボタンがクリックされました。実際の実装では、1文入力画面に遷移します。');
    });
}

// 背景（オーバーレイ）をクリックしたときに閉じる
modalOverlay.addEventListener('click', (e) => {
    // モーダルコンテンツ自体をクリックした場合は閉じない
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// ESCキーで閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// 初回訪問時に自動表示（デモ用）
// 実際の実装では、localStorageやセッション管理で初回訪問を判定
window.addEventListener('load', () => {
    // デモ用にコメントアウト。実際の実装では条件分岐で表示
    // const isFirstVisit = !localStorage.getItem('aiJobOnboardingShown');
    // if (isFirstVisit) {
    //     setTimeout(() => {
    //         openModal();
    //     }, 500);
    // }
});