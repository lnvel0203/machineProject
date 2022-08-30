package machine;
import java.util.Scanner;
public class Manager2 extends MachineInfo implements Manager {
	
	Scanner sc = new Scanner(System.in);
	@Override
	public void manage() {
		int count = 5;
		System.out.println("====================================");
		System.out.println("\t관리자 비밀번호를 입력하세요.");
		System.out.println("====================================");
		System.out.print(":");
		back = true;
		while(back){
			num = sc.nextInt();
			if(num==1004) {
				System.out.println("관리모드에 진입합니다.");
				System.out.println("====================================");
				manage1();
			}else {
				System.out.println("비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요.");
				--count;
				if(count == 0) {
					System.out.println("5회 잘못 입력하셨습니다. 메인화면으로 돌아갑니다.");
					back = false;
				}
			}
		}
	}
	@Override
	public void manage1() {
		sc.nextLine();
		System.out.println("원하시는 항목을 선택하세요.");
		back = true;
		while(back){
			System.out.println("1. 메뉴변경   2. 재고변경 3. 구매이력 확인\n4. 메인메뉴 5. 자판기 종료");
			System.out.println("========================================================================");
			num = sc.nextInt();
			if(num==1) {
				changemenu();
			}else if(num==2) {
				changestock();
			}else if(num==3) {
				System.out.println("총 수익과 구매이력을 확인합니다.");
				System.out.println("총 수입"+profit);
				System.out.println("===========================");
				pbox();
				System.out.println("| 아무 키를 눌러 뒤로가기 |");
				System.out.print(":");
				num = sc.nextInt();
				back1 = false;
				continue;
			}else if(num==4){
				System.out.println("메인메뉴로 돌아가기");
				MainMachine.mainForm();
			}else if(num==5){
				int count = 5;
				back1=true;
				while(back1) {
					System.out.println("정말로 자판기를 종료하시겠습니까?. 1. 예 2. 아니요");
					System.out.print(":");
					num = sc.nextInt();
					if(num==1) {
						System.out.println("자판기 종료");
						exit();
					}else if(num==2) {
						System.out.println("관리모드로 돌아갑니다.");
						System.out.println("======================================");
						back1 = false;
					}else{
						System.out.println("비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요.");
						System.out.println("======================================");
						--count;
						if(count == 0) {
							System.out.println("5회 잘못 입력하셨습니다. 메인화면으로 돌아갑니다.");
							System.out.println("======================================");
							back1 = false;
						}
					}
				}
			}
		}
	}
	
	
	
	
	@Override
	public void pbox() {
		for(String count : pbox) {
			System.out.println("구매내역 : "+count);
		}
	}
	@Override
	public void menuch() {
		System.out.println(box.get(num-1)+"를 변경합니다.");
		System.out.print(":");
		name[num-1] = sc.next();
		box.set(num-1, name[num-1]);
		System.out.println("===================================");
	}
	@Override
	public void changemenu() {
		back1 = true;
		while(back1) {
			System.out.println("상품을 변경합니다. 변경할 상품을 선택하세요.");
			int i=1;
			for(String manu : box) {
				System.out.print(i+". "+manu+" ");
				i++;
			}
			System.out.println("| 아무 키를 눌러 뒤로가기 |");
			System.out.print(":");
			num = sc.nextInt();
			back2 = true;
			while(back2) {
				switch(num) {
				case 1 :
					menuch();
					back2 = false;
					continue;
				case 2 :
					menuch();
					back2 = false;
					continue;
				case 3 :
					menuch();
					back2 = false;
					continue;
				case 4 :
					menuch();
					back2 = false;
					continue;

				case 5 :
					menuch();
					back2 = false;
					continue;
				case 6 :
					menuch();
					back2 = false;
					continue;
				default :
					System.out.println("뒤로가기");
					back2 = false;
					back1 = false;
					break;
				}
			}
		}
	}
	@Override
	public void stockch() {
		System.out.println(box.get(num-1)+"의 재고를 변경합니다.");
		System.out.print(":");
		stock[num-1] = sc.nextInt();
		System.out.println(box.get(num-1)+"의 재고가 "+stock[num-1]+"만큼 변경합니다.");
		System.out.println("===================================");
	}
	@Override
	public void changestock() {
		back1 = true;
		while(back1) {
			System.out.println("재고를 변경합니다. 변경할 상품을 선택하세요.");
			int i=1;
			for(String manu : box) {
				System.out.print(i+". "+manu+" ");
				i++;
			}
			System.out.println("| 아무 키를 눌러 뒤로가기 |");
			System.out.print(":");
			num = sc.nextInt();
			back2 = true;
			while(back2) {
				switch(num) {
				case 1 :
					stockch();
					back2 = false;
					continue;
				case 2 :	
					stockch();
					back2 = false;
					continue;
				case 3 :
					stockch();
					back2 = false;
					continue;
				case 4 :
					stockch();
					back2 = false;
					continue;
				case 5 :
					stockch();
					back2 = false;
					continue;
				case 6 :
					stockch();
					back2 = false;
					continue;
				default : System.out.println("뒤로가기.");
				back2 = false;
				back1 = false;
				break;
				}
			}
		}
	}
	@Override
	public void exit() {
		System.exit(6);
	}
}




