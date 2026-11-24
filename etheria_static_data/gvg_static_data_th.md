# Etheria: Restart — ข้อมูล static ของ GVG (ดึงจากไฟล์เกม)

ที่มา: `GameUE_cpp_StandAlone_Data_6361569_P.pak` (patch 6361569 / client 2.0.26) → Lua config bundle → ตาราง `guild_war_*` ข้อความไทยมาจาก text table ภาษาไทยของเกมเอง

## 1. ช่วงของสงครามกิลด์ (`guild_war`)

| ลำดับ | ช่วง | EN |
|---|---|---|
| 1 | ช่วงลงทะเบียน | Registration Period |
| 2 | ช่วงวางแผน | Layout Period |
| 3 | ช่วงต่อสู้ | Battle Period |
| 4 | ช่วงสงบศึก | Truce Period |

## 2. ระดับ (Tier) และคะแนน (`guild_war_stage`)

คะแนนชนะ/แพ้ = คะแนนอันดับที่ได้ต่อแมตช์; รางวัลรายเดือนตาม tier

| # | Tier | ช่วงคะแนน | buffer | ชนะ + | แพ้ + | รางวัลรายเดือน | รางวัลขึ้นแรงก์ |
|---|---|---|---|---|---|---|---|
| 1 | Iron I | 1000–1099 | 1000 | 100 | 0 | เหรียญสหพันธ์ ×300, Etheria Coin ×30,000, ชาโดว์พรินต์สีม่วง ×1 | เครื่องหมายสหพันธ์: สำรอง ×1, ธงสหพันธ์: สำรอง ×1 |
| 2 | Iron II | 1100–1199 | 1080 | 100 | 0 | เหรียญสหพันธ์ ×320, Etheria Coin ×40,000, ชาโดว์พรินต์สีม่วง ×1 | - |
| 3 | Iron III | 1200–1299 | 1180 | 100 | 0 | เหรียญสหพันธ์ ×360, Etheria Coin ×50,000, ชาโดว์พรินต์สีม่วง ×1 | - |
| 4 | Bronze I | 1300–1399 | 1280 | 100 | 30 | เหรียญสหพันธ์ ×400, Etheria Coin ×80,000, ชาโดว์พรินต์สีม่วง ×2 | เครื่องหมายสหพันธ์: ผู้บุกเบิก ×1, ธงสหพันธ์: ผู้บุกเบิก ×1 |
| 5 | Bronze II | 1400–1499 | 1380 | 100 | 30 | เหรียญสหพันธ์ ×450, Etheria Coin ×90,000, ชาโดว์พรินต์สีม่วง ×2 | - |
| 6 | Bronze III | 1500–1599 | 1480 | 100 | 30 | เหรียญสหพันธ์ ×500, Etheria Coin ×100,000, ชาโดว์พรินต์สีม่วง ×2 | - |
| 7 | Silver I | 1600–1699 | 1580 | 90 | 40 | เหรียญสหพันธ์ ×550, Etheria Coin ×130,000, ชาโดว์พรินต์สีม่วง ×3, ชิ้นส่วน Enhanced Prototype ×2 | เครื่องหมายสหพันธ์: มือใหม่ ×1, ธงสหพันธ์: มือใหม่ ×1 |
| 8 | Silver II | 1700–1799 | 1680 | 90 | 40 | เหรียญสหพันธ์ ×600, Etheria Coin ×140,000, ชาโดว์พรินต์สีม่วง ×3, ชิ้นส่วน Enhanced Prototype ×3 | - |
| 9 | Silver III | 1800–1899 | 1780 | 90 | 40 | เหรียญสหพันธ์ ×650, Etheria Coin ×150,000, ชาโดว์พรินต์สีม่วง ×3, ชิ้นส่วน Enhanced Prototype ×4 | - |
| 10 | Gold I | 1900–1999 | 1880 | 80 | 40 | เหรียญสหพันธ์ ×700, Etheria Coin ×180,000, ชาโดว์พรินต์สีส้ม ×1, ชิ้นส่วน Enhanced Prototype ×6 | เครื่องหมายสหพันธ์: อีลิท ×1, ธงสหพันธ์: อีลิท ×1 |
| 11 | Gold II | 2000–2099 | 1980 | 80 | 40 | เหรียญสหพันธ์ ×750, Etheria Coin ×190,000, ชาโดว์พรินต์สีส้ม ×1, ชิ้นส่วน Enhanced Prototype ×7 | - |
| 12 | Gold III | 2100–2199 | 2080 | 80 | 40 | เหรียญสหพันธ์ ×800, Etheria Coin ×200,000, ชาโดว์พรินต์สีส้ม ×1, ชิ้นส่วน Enhanced Prototype ×8 | - |
| 13 | Platinum I | 2200–2299 | 2180 | 70 | 50 | เหรียญสหพันธ์ ×850, Etheria Coin ×230,000, ชาโดว์พรินต์สีส้ม ×2, ชิ้นส่วน Enhanced Prototype ×10 | เครื่องหมายสหพันธ์: เกียรติยศ ×1, ธงสหพันธ์: เกียรติยศ ×1 |
| 14 | Platinum II | 2300–2399 | 2280 | 70 | 50 | เหรียญสหพันธ์ ×900, Etheria Coin ×240,000, ชาโดว์พรินต์สีส้ม ×2, ชิ้นส่วน Enhanced Prototype ×11 | - |
| 15 | Platinum III | 2400–2499 | 2380 | 70 | 50 | เหรียญสหพันธ์ ×950, Etheria Coin ×250,000, ชาโดว์พรินต์สีส้ม ×2, ชิ้นส่วน Enhanced Prototype ×12 | - |
| 16 | Diamond I | 2500–2599 | 2480 | 70 | 50 | เหรียญสหพันธ์ ×1,000, Etheria Coin ×280,000, ชาโดว์พรินต์สีส้ม ×3, ชิ้นส่วน Enhanced Prototype ×14 | เครื่องหมายสหพันธ์: เลเจ้นท์ ×1, ธงสหพันธ์: เลเจ้นดารี ×1 |
| 17 | Diamond II | 2600–2699 | 2580 | 70 | 50 | เหรียญสหพันธ์ ×1,050, Etheria Coin ×290,000, ชาโดว์พรินต์สีส้ม ×3, ชิ้นส่วน Enhanced Prototype ×15 | - |
| 18 | Diamond III | 2700–2799 | 2680 | 70 | 50 | เหรียญสหพันธ์ ×1,100, Etheria Coin ×300,000, ชาโดว์พรินต์สีส้ม ×3, ชิ้นส่วน Enhanced Prototype ×16 | - |
| 19 | Master I | 2800–2899 | 2780 | 60 | 50 | เหรียญสหพันธ์ ×1,200, Etheria Coin ×350,000, ชาโดว์พรินต์สีส้ม ×4, ชิ้นส่วน Enhanced Prototype ×18 | เครื่องหมายสหพันธ์: เหนือชั้น ×1, ธงสหพันธ์: เหนือชั้น ×1 |
| 20 | Master II | 2900–2999 | 2880 | 60 | 50 | เหรียญสหพันธ์ ×1,300, Etheria Coin ×400,000, ชาโดว์พรินต์สีส้ม ×4, ชิ้นส่วน Enhanced Prototype ×19 | - |
| 21 | Master III | 3000–3099 | 2980 | 60 | 50 | เหรียญสหพันธ์ ×1,400, Etheria Coin ×450,000, ชาโดว์พรินต์สีส้ม ×4, ชิ้นส่วน Enhanced Prototype ×20 | - |
| 22 | Mythic | 3100–9999 | 3080 | 50 | 50 | เหรียญสหพันธ์ ×1,500, Etheria Coin ×500,000, ชาโดว์พรินต์สีส้ม ×5, ชิ้นส่วน Enhanced Prototype ×25 | เครื่องหมายสหพันธ์: นิรันดร์ ×1, ธงสหพันธ์: นิรันดร์ ×1 |

## 3. รางวัลสิ้นซีซัน (`guild_war_stageaward`)

มีข้อมูลซีซัน 3–7 × 22 tier (110 แถว) ตัวอย่างซีซัน 7:

| Tier | รางวัล |
|---|---|
| Iron I | เหรียญสหพันธ์ ×600, Etheria Coin ×30,000, ชาโดว์พรินต์สีม่วง ×1, ลูกเต๋าแปรผัน ×2 |
| Iron II | เหรียญสหพันธ์ ×700, Etheria Coin ×40,000, ชาโดว์พรินต์สีม่วง ×1, ลูกเต๋าแปรผัน ×2 |
| Iron III | เหรียญสหพันธ์ ×800, Etheria Coin ×50,000, ชาโดว์พรินต์สีม่วง ×1, ลูกเต๋าแปรผัน ×2 |
| Bronze I | เหรียญสหพันธ์ ×900, Etheria Coin ×80,000, ชาโดว์พรินต์สีม่วง ×2, ลูกเต๋าแปรผัน ×2 |
| Bronze II | เหรียญสหพันธ์ ×1,000, Etheria Coin ×90,000, ชาโดว์พรินต์สีม่วง ×2, ลูกเต๋าแปรผัน ×2 |
| Bronze III | เหรียญสหพันธ์ ×1,100, Etheria Coin ×100,000, ชาโดว์พรินต์สีม่วง ×2, ลูกเต๋าแปรผัน ×2 |
| Silver I | เหรียญสหพันธ์ ×1,200, Etheria Coin ×130,000, ชาโดว์พรินต์สีม่วง ×3, ลูกเต๋าแปรผัน ×3 |
| Silver II | เหรียญสหพันธ์ ×1,300, Etheria Coin ×140,000, ชาโดว์พรินต์สีม่วง ×3, ลูกเต๋าแปรผัน ×3 |
| Silver III | เหรียญสหพันธ์ ×1,400, Etheria Coin ×150,000, ชาโดว์พรินต์สีม่วง ×3, ลูกเต๋าแปรผัน ×3 |
| Gold I | เหรียญสหพันธ์ ×1,500, Etheria Coin ×180,000, ชาโดว์พรินต์สีส้ม ×1, ลูกเต๋าแปรผัน ×4 |
| Gold II | เหรียญสหพันธ์ ×1,600, Etheria Coin ×190,000, ชาโดว์พรินต์สีส้ม ×1, ลูกเต๋าแปรผัน ×4 |
| Gold III | เหรียญสหพันธ์ ×1,700, Etheria Coin ×200,000, ชาโดว์พรินต์สีส้ม ×1, ลูกเต๋าแปรผัน ×4 |
| Platinum I | เหรียญสหพันธ์ ×1,800, Etheria Coin ×230,000, ชาโดว์พรินต์สีส้ม ×2, ลูกเต๋าแปรผัน ×5, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1 |
| Platinum II | เหรียญสหพันธ์ ×2,000, Etheria Coin ×240,000, ชาโดว์พรินต์สีส้ม ×2, ลูกเต๋าแปรผัน ×5, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1 |
| Platinum III | เหรียญสหพันธ์ ×2,200, Etheria Coin ×250,000, ชาโดว์พรินต์สีส้ม ×2, ลูกเต๋าแปรผัน ×5, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1 |
| Diamond I | เหรียญสหพันธ์ ×2,400, Etheria Coin ×280,000, ชาโดว์พรินต์สีส้ม ×3, ลูกเต๋าแปรผัน ×6, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1 |
| Diamond II | เหรียญสหพันธ์ ×2,700, Etheria Coin ×290,000, ชาโดว์พรินต์สีส้ม ×3, ลูกเต๋าแปรผัน ×6, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1 |
| Diamond III | เหรียญสหพันธ์ ×3,000, Etheria Coin ×300,000, ชาโดว์พรินต์สีส้ม ×3, ลูกเต๋าแปรผัน ×6, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1 |
| Master I | เหรียญสหพันธ์ ×3,500, Etheria Coin ×350,000, ชาโดว์พรินต์สีส้ม ×4, ลูกเต๋าแปรผัน ×7, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1, ผู้พิชิตแนวหน้า ×1 |
| Master II | เหรียญสหพันธ์ ×4,000, Etheria Coin ×400,000, ชาโดว์พรินต์สีส้ม ×4, ลูกเต๋าแปรผัน ×8, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1, ผู้พิชิตแนวหน้า ×1 |
| Master III | เหรียญสหพันธ์ ×4,500, Etheria Coin ×450,000, ชาโดว์พรินต์สีส้ม ×4, ลูกเต๋าแปรผัน ×9, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1, ผู้พิชิตแนวหน้า ×1 |
| Mythic | เหรียญสหพันธ์ ×5,000, Etheria Coin ×500,000, ชาโดว์พรินต์สีส้ม ×5, ลูกเต๋าแปรผัน ×10, Union Banner: Pyrite Crest ×1, ตราสหพันธ์: Pyrite Banner ×1, ผู้พิชิตแนวหน้า ×1 |

## 4. แผนที่และจุดยึด (`guild_war_map`, `guild_war_map_menu`)

| map_id | ใช้ใน | คะแนนสูงสุด (max_score) | asset |
|---|---|---|---|
| 1 | สงครามกิลด์ปกติ (协同战线基础图) | 4,600 | `WBP_UI_Guild_GVG_Map_01_General` |
| 2 | Union Championship / global (全球赛比赛用图) | 6,900 | `WBP_UI_Guild_GVG_Map_02_EWCS` |

คอลัมน์: troop = จำนวนทีมป้องกัน, queue = คิว, kill/capture = คะแนนเมื่อสังหาร/ยึด, twin = buff ของจุดคู่ (ดู guild_war_skill 4001–4004), `elite` = รายการ id จุดอื่น (น่าจะเป็นจุดที่เชื่อมกัน — ยังไม่ยืนยัน)


### แผนที่ 1

| id | จุด | EN | type | troop | queue | kill | capture | twin | elite | รางวัลยึด |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | จุดสังเกต A | OB Point A | 1 | 1 | 3 | 10 | 50 | - | - | - |
| 2 | จุดสังเกต B | OB Point B | 1 | 1 | 3 | 10 | 50 | - | - | - |
| 3 | จุดสังเกต C | OB Point C | 1 | 1 | 3 | 10 | 50 | - | - | - |
| 4 | ศูนย์เสบียง | Supply Hub | 2 | 2 | 3 | 10 | 200 | - | [1, 5, 8] | Etheria Coin ×50,000, ค่าเสถียรภาพ ×10 |
| 5 | จุดสังเกต D | OB Point D | 1 | 1 | 3 | 10 | 50 | - | [2, 4, 6, 9] | - |
| 6 | Recon Spire | Recon Spire | 2 | 2 | 3 | 10 | 200 | - | [3, 5, 10] | Etheria Coin ×50,000, Inter. Investigation Record ×2 |
| 7 | จุดสังเกต E | OB Point E | 1 | 1 | 3 | 10 | 50 | - | [8, 12] | - |
| 8 | จุดสังเกต F | OB Point F | 1 | 1 | 3 | 10 | 50 | - | [4, 7, 9, 13] | - |
| 9 | สถานีรถไฟบูรณาการ | Integrated Train Station | 2 | 2 | 3 | 10 | 200 | - | [5, 8, 10, 14] | Etheria Coin ×50,000, Prim. Investigation Record ×10 |
| 10 | จุดสังเกต B | OB Point G | 1 | 1 | 3 | 10 | 50 | - | [6, 9, 11, 15] | - |
| 11 | จุดสังเกต H | OB Point H | 1 | 1 | 3 | 10 | 50 | - | [10, 16] | - |
| 12 | ศูนย์สื่อสารลับ | Stealth Hub | 2 | 2 | 3 | 10 | 200 | - | [7, 13, 19] | Etheria Coin ×50,000, ชาโดว์พรินต์สีน้ำเงิน ×1 |
| 13 | จุดสังเกต I | OB Point I | 1 | 1 | 3 | 10 | 50 | - | [8, 12, 14, 17] | - |
| 14 | จุดสังเกต J | OB Point J | 1 | 1 | 3 | 10 | 50 | - | [9, 13, 15] | - |
| 15 | จุดสังเกต K | OB Point K | 1 | 1 | 3 | 10 | 50 | - | [10, 14, 16, 18] | - |
| 16 | คลังอาวุธสำรอง | Reserve Armory | 2 | 2 | 3 | 10 | 200 | - | [11, 15, 20] | Etheria Coin ×50,000, Inter. Investigation Record ×2 |
| 17 | ห้องแลปโมเลกุล | Molecular Lab | 2 | 2 | 3 | 10 | 200 | - | [13, 21] | Etheria Coin ×50,000, ชาโดว์พรินต์สีน้ำเงิน ×1 |
| 18 | ศูนย์การแพทย์ | Medical Hub | 2 | 2 | 3 | 10 | 200 | - | [15, 21] | Etheria Coin ×50,000, แพ็กอุปกรณ์ศักยภาพเริ่มต้น ×5 |
| 19 | ผิดปกติ A | Anomaly A | 3 | 1 | 4 | 50 | 100 | - | [12] | Hydra Crystal ×50, Adv. Investigation Record ×2 |
| 20 | ผิดปกติ B | Anomaly B | 3 | 1 | 4 | 50 | 100 | - | [16] | Hydra Crystal ×50, แพ็กอุปกรณ์ศักยภาพขั้นกลาง ×3 |
| 21 | คอร์ทั่วโลก | Prime Nexus | 4 | 3 | 4 | 30 | 500 | - | [17, 18] | Hydra Crystal ×100, ชาโดว์พรินต์สีม่วง ×1 |

### แผนที่ 2

| id | จุด | EN | type | troop | queue | kill | capture | twin | elite | รางวัลยึด |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | จุดสังเกต A | OB Point A | 1 | 1 | 5 | 10 | 50 | - | - | - |
| 2 | จุดสังเกต B | OB Point B | 1 | 1 | 5 | 10 | 50 | - | - | - |
| 3 | จุดสังเกต C | OB Point C | 1 | 1 | 5 | 10 | 50 | - | - | - |
| 4 | จุดสังเกต D | OB Point D | 1 | 1 | 5 | 10 | 50 | - | - | - |
| 5 | Blazing Star Garrison | Blazing Star Garrison | 5 | 1 | 5 | 30 | 100 | 4001 | [1, 11] | Hydra Crystal ×50, Adv. Investigation Record ×2 |
| 6 | ศูนย์สื่อสารลับ α | Stealth Hub α | 2 | 2 | 5 | 10 | 200 | - | [1, 2, 7, 12] | Etheria Coin ×50,000, ชาโดว์พรินต์สีน้ำเงิน ×1 |
| 7 | สถานีรถไฟบูรณาการ α | Integrated Train Station α | 2 | 2 | 5 | 10 | 200 | - | [2, 6, 8, 13] | Etheria Coin ×50,000, Prim. Investigation Record ×10 |
| 8 | ศูนย์สื่อสารลับ β | Stealth Hub β | 2 | 2 | 5 | 10 | 200 | - | [3, 7, 9, 14] | Etheria Coin ×50,000, ชาโดว์พรินต์สีน้ำเงิน ×1 |
| 9 | คลังอาวุธสำรอง β | Reserve Armory β | 2 | 2 | 5 | 10 | 200 | - | [3, 4, 8, 15] | Etheria Coin ×50,000, Inter. Investigation Record ×2 |
| 10 | Blazing Star Garrison | Blazing Star Garrison | 5 | 1 | 5 | 30 | 100 | 4001 | [4, 16] | Hydra Crystal ×50, Adv. Investigation Record ×2 |
| 11 | จุดสังเกต E | OB Point E | 1 | 1 | 5 | 10 | 50 | - | [5, 12, 17] | - |
| 12 | ห้องแลปโมเลกุล α | Molecular Lab α | 2 | 2 | 5 | 10 | 200 | - | [6, 11, 19] | Etheria Coin ×50,000, แพ็กอุปกรณ์ศักยภาพเริ่มต้น ×5 |
| 13 | Luna Sentry Garrison | Luna Sentry Garrison | 6 | 1 | 5 | 40 | 100 | 4002 | [7, 19] | Hydra Crystal ×50, แพ็กอุปกรณ์ศักยภาพขั้นสูง ×1 |
| 14 | Luna Sentry Garrison | Luna Sentry Garrison | 6 | 1 | 5 | 40 | 100 | 4002 | [8, 20] | Hydra Crystal ×50, แพ็กอุปกรณ์ศักยภาพขั้นสูง ×1 |
| 15 | ศูนย์การแพทย์ β | Medical Hub β | 2 | 2 | 5 | 10 | 200 | - | [9, 16, 20] | Etheria Coin ×50,000, แพ็กอุปกรณ์ศักยภาพขั้นกลาง ×2 |
| 16 | จุดสังเกต F | OB Point F | 1 | 1 | 5 | 10 | 50 | - | [10, 15, 18] | - |
| 17 | Apocalypse Garrison | Apocalypse Garrison | 7 | 1 | 5 | 50 | 100 | 4003 | [11, 19] | Hydra Crystal ×50, ชาโดว์พรินต์สีม่วง ×1 |
| 18 | Apocalypse Garrison | Apocalypse Garrison | 7 | 1 | 5 | 50 | 100 | 4003 | [16, 20] | Hydra Crystal ×50, ชาโดว์พรินต์สีม่วง ×1 |
| 19 | Prime Nexus α | Prime Nexus α | 4 | 3 | 5 | 30 | 400 | 4004 | [12, 13, 17, 20] | Hydra Crystal ×100, ต้นแบบแอนิม่า ×1 |
| 20 | Prime Nexus β | Prime Nexus β | 4 | 3 | 5 | 30 | 400 | 4004 | [14, 15, 18, 19] | Hydra Crystal ×100, ต้นแบบแอนิม่า ×1 |

## 5. กลไก/บัฟของฝ่ายป้องกัน (`guild_war_skill`)

| id | type | ผล (ไทย) |
|---|---|---|
| 1001 | 1 | Selone สร้าง DMG จริง กับผู้โจมตีและมอบ [Wound] หาก [Wound] ขัดขวางการฟื้นฟู HP จะทำให้ Animus โจมตีเอาชีวิตรอดได้ยาก |
| 1002 | 1 | Selone ฮีล Animus ป้องกัน พยายามตัดการฮีลของพวกเขา / Selone ฮีล Animus ป้องกันและชะล้างดีบัฟของพวกเขาออก พยายามตัดการฮีลของพวกเขา |
| 1003 | 1 | Selone จะมอบ [Blazing] ให้กับ Animus ป้องกัน [Blazing] จะเพิ่ม DMG ของ Animus |
| 1004 | 1 | Selone จะสร้าง DMG จริงใส่ผู้โจมตี โดยมีโอกาสที่จะลบล้างบัฟ |
| 1005 | 1 | Selone เพิ่มเกจเทิร์นของ Animus ป้องกัน และมอบโบนัสหลังจากที่ Animus ทำแอ็กชัน โดยเอฟเฟ็กต์การควบคุมจะลบบัฟทั้งหมดที่ได้รับ |
| 2001 | 2 | Animus ป้องกันจะได้รับโอกาสโจมตีตามซ้ำเพิ่มเติม 30% |
| 2002 | 2 | Animus ป้องกันจะได้รับโอกาสโจมตีสวนกลับเพิ่มเติม 40% |
| 2003 | 2 | เมื่อผู้ป้องกันสร้าง DMG จะเพิ่ม DMG สุดท้ายที่ผู้ป้องกันทำกับ Animus ที่มี HP สูงกว่า 65% ขึ้น 40% |
| 2004 | 2 | เมื่อผู้ป้องกันสร้าง DMG จะเพิ่ม DMG สุดท้ายที่ผู้ป้องกันทำกับ Animus ที่มี HP ต่ำกว่า 35% ขึ้น 60% |
| 2005 | 2 | เมื่อผู้ป้องกันสร้าง DMG สำหรับทุก ๆ 2.5% ของ Max HP ของเป้าหมายคือ DMG ที่ทำได้ เกจเทิร์นของเป้าหมายจะลดลง 1% |
| 2006 | 2 | เมื่อผู้ป้องกันสร้าง DMG สำหรับทุก ๆ 2% ของ Max HP ของผู้ป้องกันคือ DMG ที่ได้รับ เกจเทิร์นของเป้าหมายจะเพิ่มขึ้น 1% |
| 2007 | 2 | เมื่อผู้ป้องกันรับ DMG ที่มีสกิลเป้าหมายเดียว ผู้ป้องกันจะสร้าง DMG ทางอ้อมเพิ่มเติม 50% กับ Animus ศัตรูตัวอื่น ๆ นอกเหนือจากเป้าหมายหลัก |
| 2008 | 2 | เมื่อผู้ป้องกันได้รับ DMG จะทำ DMG ทางอ้อมกับผู้โจมตีเท่ากับ 20% ของ DMG ที่ได้รับ |
| 2009 | 2 | เมื่อผู้ป้องกันสร้าง DMG ผู้ป้องกันจะฟื้นฟู HP เท่ากับ 35% ของ DMG ที่ทำได้ |
| 2010 | 2 | หลังจาก Animus ป้องกันจบเทิร์นของพวกเขา จะเพิ่มเกจเทิร์นของ Animus พันธมิตรขึ้น 15% |
| 2011 | 2 | แต่ละครั้งที่ Animus ป้องกันปล่อยโจมตีติด CRIT จะได้รับโบนัส DMG 2% สูงสุด 100% |
| 2012 | 2 | เมื่อได้รับ CRIT DMG ผู้ป้องกันได้รับโล่เท่ากับ 30% ของ CRIT DMG |
| 2013 | 2 | ใช้เอฟเฟ็กต์ออร่ากับ Animus ป้องกันที่อยู่ตำแหน่งกลางเพื่อเพิ่ม ATK 30% ให้กับพันธมิตรอื่น ๆ เอฟเฟ็กต์นี้จะถูกลบออกเมื่อผู้ถือครองออร่าตาย |
| 2014 | 2 | ใช้เอฟเฟ็กต์ออร่ากับ Animus ป้องกันที่อยู่ตำแหน่งกลางเพื่อเพิ่ม DEF 45% ให้กับพันธมิตรอื่น ๆ เอฟเฟ็กต์นี้จะถูกลบออกเมื่อผู้ถือครองออร่าตาย |
| 2015 | 2 | ใช้เอฟเฟ็กต์ออร่ากับ Animus ป้องกันที่อยู่ตำแหน่งกลางเพื่อเพิ่ม SPD 15% ให้กับพันธมิตรอื่น ๆ เอฟเฟ็กต์นี้จะถูกลบออกเมื่อผู้ถือครองออร่าตาย |
| 2016 | 2 | เพิ่ม DMG สุดท้ายที่ผู้ป้องกันทำกับ Animus ที่มีความได้เปรียบในด้านรูปแบบ 300% |
| 3001 | 3 | สำหรับแต่ละโหนดของคอร์นี้ที่ยังไม่ถูกยึดครอง Animus ป้องกันจะได้รับ 20% ATK และ DEF |
| 4001 | 4 | param [100] |
| 4002 | 4 | param [200] |
| 4003 | 4 | param [300] |
| 4004 | 4 | param [400] |

type 1 = กลไกบอส Selone (2 ระดับต่อ id), type 2 = บัฟผู้ป้องกัน, type 3 = บัฟคอร์ตามโหนดที่ยังไม่ถูกยึด, type 4 = ค่า twin buff ของจุดในแผนที่ 2 (param 100/200/300/400 — ความหมายยังไม่ยืนยัน)

## 6. Union Championship (global GVG)

### ตาราง 28 วัน (`guild_war_global_stage`)

| วัน | ช่วง | รอบย่อย | round_id |
|---|---|---|---|
| 1 | Match Preview | Match Preview | 1 |
| 2 | Match Preview | Match Preview | 1 |
| 3 | Match Preview | Match Preview | 1 |
| 4 | Match Preview | Match Preview | 1 |
| 5 | Match Preview | Match Preview | 1 |
| 6 | Top 64 Showcase | Match Preview | 1 |
| 7 | Top 64 Showcase | Match Preview | 1 |
| 8 | Groups Round 1 | Groups Round 1 | 1 |
| 9 | Groups Round 1 | Groups Round 1 | 1 |
| 10 | Groups Round 1 | Groups Round 1 | 1 |
| 11 | Groups Round 2 | Groups Round 2 | 2 |
| 12 | Groups Round 2 | Groups Round 2 | 2 |
| 13 | Groups Round 2 | Groups Round 2 | 2 |
| 14 | Top 16 Showcase | 1/8 Finals | 3 |
| 15 | 1/8 Finals | 1/8 Finals | 3 |
| 16 | 1/8 Finals | 1/8 Finals | 3 |
| 17 | 1/8 Finals | 1/8 Finals | 3 |
| 18 | 1/4 Finals | 1/4 Finals | 4 |
| 19 | 1/4 Finals | 1/4 Finals | 4 |
| 20 | 1/4 Finals | 1/4 Finals | 4 |
| 21 | Top 4 Showcase | Semifinals | 5 |
| 22 | Semifinals | Semifinals | 5 |
| 23 | Semifinals | Semifinals | 5 |
| 24 | Semifinals | Semifinals | 5 |
| 25 | Finals | Finals | 6 |
| 26 | Finals | Finals | 6 |
| 27 | Finals | Finals | 6 |
| 28 | Champion Showcase | Champion Showcase | 7 |

กลุ่ม: Group A, Group B, Group C, Group D, Group E, Group F, Group G, Group H, Group I, Group J, Group K, Group L, Group M, Group N, Group O, Group P (16 กลุ่ม)

### รางวัล (`guild_war_global_award`)

| id | รางวัล | ของ |
|---|---|---|
| 1 | Cheer Rewards | Etheria Coin ×50,000 |
| 2 | Top 16 Prediction Rewards | Hydra Crystal ×50 |
| 3 | Top 8 Prediction Rewards | Hydra Crystal ×100 |
| 4 | Top 4 Prediction Rewards | Hydra Crystal ×150 |
| 5 | Champion Prediction Rewards | Hydra Crystal ×200 |
| 6 | Top 64 | Hydra Prestige Vouchers ×2, Hydra Crystal ×800, ลูกเต๋าแปรผัน ×6, ลูกเต๋าซิงโครไนซ์ ×1 |
| 7 | Top 32 | Hydra Prestige Vouchers ×3, Hydra Crystal ×900, ลูกเต๋าแปรผัน ×9, ลูกเต๋าซิงโครไนซ์ ×1 |
| 8 | Top 16 | Hydra Prestige Vouchers ×4, Hydra Crystal ×1,000, ลูกเต๋าแปรผัน ×12, ลูกเต๋าซิงโครไนซ์ ×1, Lumina Fragment ×10, EUC Astral Pyrite Banner ×1, EUC Astral Pyrite Crest ×1, Frontline Dominion ×1 |
| 9 | Top 8 | Hydra Prestige Vouchers ×5, Hydra Crystal ×1,100, ลูกเต๋าแปรผัน ×16, ลูกเต๋าซิงโครไนซ์ ×2, Lumina Fragment ×20, EUC Astral Pyrite Banner ×1, EUC Astral Pyrite Crest ×1, Frontline Dominion ×1 |
| 10 | Top 4 | Hydra Prestige Vouchers ×6, Hydra Crystal ×1,200, ลูกเต๋าแปรผัน ×20, ลูกเต๋าซิงโครไนซ์ ×3, Lumina Fragment ×30, EUC Astral Pyrite Banner ×1, EUC Astral Pyrite Crest ×1, Frontline Dominion ×1 |
| 11 | 2nd | Hydra Prestige Vouchers ×8, Hydra Crystal ×1,600, ลูกเต๋าแปรผัน ×25, ลูกเต๋าซิงโครไนซ์ ×4, Lumina Fragment ×40, EUC Astral Pyrite Banner ×1, EUC Astral Pyrite Crest ×1, Frontline Dominion ×1 |
| 12 | 1st | Hydra Prestige Vouchers ×10, Hydra Crystal ×2,000, ลูกเต๋าแปรผัน ×30, ลูกเต๋าซิงโครไนซ์ ×5, Lumina Fragment ×50, EUC Astral Pyrite Banner ×1, EUC Astral Pyrite Crest ×1, Frontline Dominion ×1, แชมป์ EUC Star ×1 |

---
หมายเหตุ: ข้อมูลนี้คือค่าที่ฝั่ง client มี server อาจปรับค่าทับได้ ชื่อบางอย่างในไฟล์ภาษาไทยของเกมเองยังเป็นภาษาอังกฤษ/แปลไม่ตรง (เช่น OB Point G แสดงเป็น "จุดสังเกต B")