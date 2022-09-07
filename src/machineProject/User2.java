package machineProject;

import java.sql.Timestamp;
import java.util.Scanner;


public class User2 extends MainchineInfo implements User {
	Scanner sc = new Scanner(System.in);
	@Override
	public void goodsInfo() {
		int count = 5;
		num3=0;
		back1 = true;
		while(back1) {
			System.out.println("===============================================");
			System.out.println("\t  | 1. 음료 | 2. 과자 | 3. 뒤로가기 |");
			System.out.println("===============================================");
			System.out.print("메뉴를 고르세요 : ");
			num1 = sc.nextInt();
			if(num1==1) {
				back = true;		
				while(back) {

					System.out.println("===============================================");
					int i = 1;
					for(String box : drink) {
						System.out.print("|"+i +". "+ box);
						i++;
					}
					System.out.println("|8. 뒤로가기 | ");
					System.out.println("===============================================");
					System.out.println();
					System.out.print("상품을 고르세요 : ");
					num = sc.nextInt();
					
					if(num<8) {
						switch(num) {
						default :
							stock();
						}
					}else if(num==8) {
						System.out.println("뒤로가기");
						back=false;
					}else {
						System.out.println("잘못 입력하였습니다. 다시 입력하세요.");
						back=false;
					}
				}



			}else if(num1==2){
				back = true;		
				while(back) {
					System.out.println("===============================================");
					int i = 1;
					for(String box : snack) {
						System.out.print("|"+i +"."+ box);
						i++;
					}
					System.out.println("|8. 뒤로가기 | ");
					System.out.println("===============================================");
					System.out.println();
					System.out.print("상품을 고르세요 : ");
					num = sc.nextInt();
				
					if(num<8) {
						switch(num) {
						default :
							stock1();
						}
					}else if(num==8) {
						System.out.println("뒤로가기");
						back=false;
					}else {
						System.out.println("잘못 입력하였습니다. 다시 입력하세요.");
						back=false;
					}
				}

			}else if(num1==3) {
				System.out.println("뒤로가기");
				refund();
				back1=false;
			}else {
				System.out.println("잘못 입력하였습니다. 다시 입력하세요.");
				--count;
				if(count == 0) {

					System.out.println("5회 잘못 입력하셨습니다. 메인화면으로 돌아갑니다.");
					back1=false;
				}
			}
		}
	}





	@Override
	public void stock() {
		if(stock[num-1]==0) {
			System.out.println("재고가 부족합니다.");
			back = false;
		}else {
			stock[num-1]--;
			count();
			goods();
		}
	}
	@Override
	public void stock1() {
		if(stock1[num-1]==0) {
			System.out.println("재고가 부족합니다.");
			back = false;
		}else {
			stock1[num-1]--;
			num3=1;
			count();
			goods1();
		}
	}




	@Override
	public void goods() {
		System.out.println("===============================================");
		System.out.println();
		System.out.println(drink.get(num-1) + "를 선택하셨습니다.");
		System.out.println(drink.get(num-1)+"의 가격은 " + price.get(num-1) + "원입니다.");
		System.out.println();
		System.out.println("===============================================");
		purchase();
	}
	@Override
	public void goods1() {
		System.out.println("===============================================");
		System.out.println();
		System.out.println(snack.get(num-1) + "를 선택하셨습니다.");
		System.out.println(snack.get(num-1)+"의 가격은 " + price.get(num-1) + "원입니다.");
		System.out.println();
		System.out.println("===============================================");
		purchase();
	}
	@Override
	public void purchase() {
		System.out.println("구매하시겠습니까?");
		System.out.println("1. 예 2. 아니요");
		System.out.print(":");
		num2 = sc.nextInt();
		switch(num2) {
		case 1:
			if(pnum< price.get(num-1)) {
				System.out.println("돈이 부족합니다. 추가 금액을 넣어주세요.");
				plusMoney();
				purchase();
			}else {
				pnum = pnum - price.get(num-1);
				profit();
				sell();
			}
			break;
		case 2: 
			goodsInfo();
			back = false;
			break;
		default :
			System.out.println("다시 입력하세요.");
			break;
		}
	}
	@Override								
	public void sell() {
		System.out.println(pnum + "원");
		System.out.println("구매해주셔서 감사합니다");
		System.out.println("==========================================");
		System.out.println("1. 재구매\t 2. 메인화면");
		num = sc.nextInt();
		if(num==1) {
			goodsInfo();
			back = false;
		}else {
			refund();
			MainMachine.mainForm();
			back = false;
		}
	}
	@Override
	public void count() {
		if(i<=10) {
			Long datetime = System.currentTimeMillis();
			Timestamp timestamp = new Timestamp(datetime);

			if(num3==1) {
				pbox[i] = snack.get(num-1)+"구매시간 : "+timestamp;
				i++;
			}else {
				pbox[i] = drink.get(num-1)+"구매시간 : "+timestamp;
				i++;
			}
		}else {
			i=0;
			Long datetime = System.currentTimeMillis();
			Timestamp timestamp = new Timestamp(datetime);
			if(num3==1) {
				pbox[i] = snack.get(num-1)+"구매시간 : "+timestamp;
				i++;
			}else {
				pbox[i] = drink.get(num-1)+"구매시간 : "+timestamp;
				i++;
			}
		}
	}
	@Override
	public void profit() {
		profit = profit + price.get(num-1);
	}
	@Override
	public void refund() {
		System.out.println(pnum+"원을 반환합니다.");
		pnum=0;
	}
	@Override
	public void plusMoney() {
		System.out.print(":");
		num = sc.nextInt();
		pnum = pnum + num;
		System.out.println(pnum + "원이 있습니다.");
	}
}
