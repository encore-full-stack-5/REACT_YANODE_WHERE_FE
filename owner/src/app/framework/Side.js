import framework from '@/resources/framework.module.css';

export default function Side() {
    return (
        <>
            <div className={framework.sideWrap}>
                {/* 로고 이미지 넣기 */}
                <p className={framework.logo}><span>W</span>here?</p>

                {/* 프로필 -> Header로 이동 */}
                {/*<div className={framework.userInfo}>*/}
                {/*    <p className={framework.userNm}><b>야노드</b>님</p>*/}
                {/*    <p className={framework.userId}>yanode00</p>*/}
                {/*</div>*/}

                {/* 메뉴 */}
                <ul className={framework.sideList}>
                    <li className={[framework.menu, framework.on].join(' ')}>가게 정보</li>
                    <li className={framework.menu}>메뉴 등록</li>
                    <li className={framework.menu}>판매 내역</li>
                    <li className={framework.menu}>주문 접수</li>
                    <li className={framework.menu}>내 정보</li>
                </ul>
                <div className={framework.logoutWrap}>
                    <button className={framework.logout}>
                        {/* 로그아웃 이미지 자리 */}
                        <p>Log out</p>
                    </button>
                </div>
            </div>
        </>
    )
}