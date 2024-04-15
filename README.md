# 재래시장 배달서비스

## 프로젝트 목적
**Admin** : B2B, B2C 관리하는 관리자
<br/>
**B2B** : 사업자 (Owner)
<br/>
**B2C** : 고객 (Customer)

## 기능 명세서
| Admin | B2B | B2C |
| --- | --- | --- |
| 로그인/로그아웃 | 로그인/로그아웃 | 로그인/로그아웃 |
| 사업자 관리 | 회원가입 | 회원가입 |
| 매장 관리 | 가게 정보 | 매장 찾기 |
| 고객 관리 | 메뉴 등록 | 메뉴 접수 |
| 사업자·고객  로그 | 주문 접수 | 주문내역 |
| 매장·메뉴 로그 | 마이페이지 | 마이페이지 |

## 사용할 기술
[![My Skills](https://skillicons.dev/icons?i=postgres,express,nextjs&perline=3)](https://skillicons.dev)
<br/>
**DB** : PostgreSQL
<br/>
**Back** : Express JS
<br/>
**Front** : Next JS

## 데이터 모델링
<img width="1534" alt="스크린샷 2024-04-11 오후 9 40 03" src="https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/d587ce49-cea7-4d63-9e09-2f450efc56c8">

## Express 라우팅 구조
<img width="1355" alt="스크린샷 2024-04-11 오후 9 54 09" src="https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/f66154f2-fbb6-48c8-86a6-abebb3d026d6">

## Next 파일 구조
<img width="306" alt="스크린샷 2024-04-11 오후 10 07 19" src="https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/ddc82f29-4123-417e-9d20-81de3fc6af83">
<img width="301" alt="스크린샷 2024-04-11 오후 10 09 18" src="https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/94bd1d24-deaa-4483-acb7-cb1a0f4126e0">

## 구현한 기능
**굵은 글씨** : 구현 완료 / <sup>작은 글씨</sup> : 구현 미완료
> B2B (Owner)

1. **로그인/로그아웃**
![image (1)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/7b945ecc-ea38-40a6-9612-43cbf96378ca)
2. <sup>회원가입</sup></p>
3. **가게 정보**
![image (3)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/3d4e577c-fa8e-44d6-a6a6-3c303ddac9de)
     - **조회**
     - <sup>저장</sup>
4. **메뉴 등록**
![image (4)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/dfcbd5d7-7097-474a-a9b0-f11cfdc8a6c6)
     - **메뉴 조회**
     - **메뉴 필터**
         - **판매 중**
         - **품절 메뉴**
         - **숨긴 메뉴**
     - **메뉴 상세 (수정, 저장)**
![image (5)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/2d10233f-33a8-40fa-a253-f4ed1a6abe01)
         - <sup>사진 추가</sup>
         - **메뉴명/메뉴설명/메뉴가격/메뉴상태**
         - **옵션 추가/삭제**
         - <sup>옵션 저장</sup>
5. **주문 접수**
![image (2)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/24e5b92f-2710-4cde-8aa5-7629c0e96f8c)
     - **주문 내역 조회**
     - **주문 상세**
     - **주문 상태 (접수 중)**
         - **주문 접수 버튼 (주문 상태 : 접수 중 -> 주문)**
     - <sup>주문 내역 조회 (검색)</sup>
6. **마이페이지**
![image (6)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/c7cfde27-5853-4f46-9919-4af0f2923f4f)
     - **정보 조회**
     - <sup>정보 사진 등록</sup>
     - **정보 수정**

> B2C (Customer)

1. **로그인/로그아웃**
![image (1)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/7b945ecc-ea38-40a6-9612-43cbf96378ca)
2. <sup>회원가입</sup>
3. **매장 찾기**
![image (7)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/1e3b456d-dfe1-41bd-ad12-488a208b9e77)
     - **매장 조회**
4. **메뉴 접수**
![image (8)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/2a45dca3-a61e-4b72-b6b9-8e23fd549c46)
     - **메뉴 조회**
     - **메뉴 상세**
![image (9)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/967c82ee-ea9e-463d-8577-fb88732e3738)
         - <sup>옵션 선택</sup>
         - **메뉴 주문**
     - **메뉴 상세 (수정, 저장)**
         - <sup>사진 추가</sup>
         - **메뉴명/메뉴설명/메뉴가격/메뉴상태**
         - **옵션 추가/삭제**
         - <sup>옵션 저장</sup>
5. **주문 내역**
![image (10)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/6733eacb-3376-4d4c-8e77-bd4b2fbcd8ff)
     - **주문 내역 조회**
     - **주문 내역 상세**
![image (11)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/4ffec581-1643-4692-8293-d34fa1a3c3cf)
         - <sup>주문 취소</sup>
         - <sup>배송 현황</sup>
     - <sup>주문 내역 조회 (검색)</sup>
6. **마이페이지**
![image (12)](https://github.com/encore-full-stack-5/react_yanode_where_FE/assets/125454927/2f45299d-8e83-4399-a3f8-46504e8a2c1c)
     - **정보 조회**
     - **정보 수정**

> Admin (구현 X)

<br/>

## 추가하고 싶은 기능
1. 위에 구현하지 못한 기능
2. 더 세밀하고 깔끔한 UI
3. [B2C] 장바구니
4. [B2B/B2C] 리뷰 (별점)
5. [B2B] 매장 즐겨찾기, 즐겨찾기 목록
6. [B2C] 내 주변 매장 찾기 (위치)
7. [B2C] 메뉴 옵션 선택

## 느낀 점
1. 데이터베이스 설계가 중요하다는 것을 느꼈다, 정확하고 효율적인 데이터 관리는 시스템의 성능과 안정성을 유지하는 데 필수적이라는 것을 느꼈다.
2. 폴더구조가 그대로 라우팅 경로가 되고, JS에서 HTML도 함께 작성하는 것은 HTML, CSS, JS로만 웹을 개발하는 것보다 훨씬 빨랐다.
3. 데이터를 주고 받을 형식에 대한 명세가 더 구체적이어야 한다고 느꼈다.
4. Next JS, Express JS, postgreSQL 세 가지를 같이 사용하면서 프론트와 백 그리고 서버 간의 정보 교환 흐름을 이해할 수 있게 됐다.

## 아쉬운 점
1. 개발 일정을 자세히 세워서 적당한 규모로 설계하지 못 해 프로젝트를 완성하지 못 해서 아쉬웠다.
2. Git Issue 관리와 Branch를 사용이 미숙해 이용하지 않아 아쉬웠다.
