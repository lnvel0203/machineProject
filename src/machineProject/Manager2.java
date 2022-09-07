package machineProject;

import java.util.Scanner;

public class Manager2 extends MainchineInfo implements Manager{

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
			System.out.println("1. 메뉴변경 2. 재고변경 3. 구매이력 확인 4. 메인메뉴 5. 상품추가 6. 상품제거 7. 자판기 종료");
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
				menumake();
			}else if(num==6){
				menudelete();
			}else if(num==7){
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
	public void changemenu() {
		back1 = true;
		while(back1) {
			System.out.println("상품을 변경합니다. 변경할 품목을 선택하세요.| 1. 음료 | 2. 과자 | 3. 뒤로가기 |");
			System.out.print(":");
			num = sc.nextInt();
			if(num==1) {
				int i=1;
				for(String manu : drink) {
					System.out.print(i+". "+manu+" ");
					i++;
				}
				System.out.println("\n===================================");
				System.out.println("변경하실 음료를 선택하세요.");
				System.out.print(":");
				num = sc.nextInt();
				menuch();
			}else if(num==2) {
				int i=1;
				for(String manu : snack) {
					System.out.print(i+". "+manu+" ");
					i++;
				}
				System.out.println("\n===================================");
				System.out.println("변경하실 과자를 선택하세요.");
				System.out.print(":");
				num = sc.nextInt();
				menuch1();
			}else if(num==3){
				back1=false;
				break;
			}else {
				System.out.println("잘못입력하셨습니다.");
				continue;
			}
		}
	}
	@Override
	public void menuch() {
		boolean back3 = true;
		while(back3) {
			System.out.println(drink.get(num-1)+"를 변경합니다.");
			System.out.print(":");
			box = sc.next();
			drink.set(num-1, box);
			System.out.println("===================================");
			System.out.println(drink.set(num-1, box)+"로 변경되었습니다.");
			System.out.println("=============================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}
	@Override
	public void menuch1() { 
		boolean back3 = true;
		while(back3) {
			System.out.println(snack.get(num-1)+"를 변경합니다.");
			System.out.print(":");
			box = sc.next();
			snack.set(num-1, box);
			System.out.println("===================================");
			System.out.println(snack.set(num-1, box)+"로 변경되었습니다.");
			System.out.println("===================================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}
	@Override
	public void changestock() {
		back1 = true;
		while(back1) {
			System.out.println("재고을 변경합니다. 변경할 품목을 선택하세요.| 1. 음료 | 2. 과자 | 3. 뒤로가기 |");
			System.out.print(":");
			num = sc.nextInt();
			if(num==1) {
				int i=1;
				for(String manu : drink) {
					System.out.print(i+". "+manu+" ");
					i++;
				}
				System.out.println("\n===================================");
				System.out.println("변경하실 음료를 선택하세요.");
				System.out.print(":");
				num = sc.nextInt();
				stockch();
			}else if(num==2) {
				int i=1;
				for(String manu : snack) {
					System.out.print(i+". "+manu+" ");
					i++;
				}
				System.out.println("\n===================================");
				System.out.println("변경하실 과자를 선택하세요.");
				System.out.print(":");
				num = sc.nextInt();
				stockch1();
			}else if(num==3){
				back1=false;
				break;
			}else {
				System.out.println("잘못입력하셨습니다.");
				continue;
			}
		}
	}
	@Override
	public void stockch() {
		boolean back3 = true;
		while(back3) {
			System.out.println(drink.get(num-1)+"의 재고를 변경합니다.");
			System.out.print(":");
			stock[num-1] = sc.nextInt();
			System.out.println(drink.get(num-1)+"의 재고가 "+stock[num-1]+"만큼 변경합니다.");
			System.out.println("===================================");
			System.out.println("===================================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}
	@Override
	public void stockch1() {
		boolean back3 = true;
		while(back3) {
			System.out.println(snack.get(num-1)+"의 재고를 변경합니다.");
			System.out.print(":");
			stock1[num-1] = sc.nextInt();
			System.out.println(snack.get(num-1)+"의 재고가 "+stock1[num-1]+"만큼 변경합니다.");
			System.out.println("===================================");
			System.out.println("===================================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
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
	public void menumake() {
		back1 = true;
		while(back1) {
			System.out.println("상품을 추가합니다. 원하시는 품목을 선택해 주세요. | 1. 음료 | 2. 과자 | 아무 키를 눌러 뒤로가기 |");
			System.out.print(":");
			num = sc.nextInt();
			back2 = true;
			while(back2) {
				switch(num) {

				case 1 : make();
				back2 = false;
				break;

				case 2 : make1();
				back2 = false;
				break;

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
	public void make() {
		boolean back3 = true;
		while(back3) {
			int i = 1;
			for(String manu : drink) {
				System.out.print(i+". "+manu+" ");
				i++;
			}
			System.out.println("\n추가할 상품을 입력해주세요.");
			System.out.print(":");
			box = sc.next();
			drink.add(box);
			System.out.print(drink);
			System.out.println("\n=============================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}
	@Override
	public void make1() { 
		boolean back3 = true;
		while(back3) {
			int i = 1;
			for(String manu : snack) {
				System.out.print(i+". "+manu+" ");
				i++;
			}
			System.out.println("\n추가할 상품을 입력해주세요.");
			System.out.print(":");
			box = sc.next();
			snack.add(box);
			System.out.print(snack);
			System.out.println("\n=============================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}
	@Override
	public void menudelete() {
		back1 = true;
		while(back1) {
			System.out.println("상품을 삭제합니다. 원하시는 품목을 선택해 주세요. | 1. 음료 | 2. 과자 | 아무 키를 눌러 뒤로가기 |");
			System.out.print(":");
			num = sc.nextInt();
			back2 = true;
			while(back2) {
				switch(num) {

				case 1 : delete();
				back2 = false;
				break;

				case 2 : delete1();
				back2 = false;
				break;

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
	public void delete() {
		boolean back3 = true;
		while(back3) {

			System.out.println("제거할 상품의 번호를 입력해주세요.");
			int i=1;
			for(String manu : drink) {
				System.out.println(i+". "+manu+" ");
				i++;
			}
			num = sc.nextInt();
			System.out.print(":");
			drink.remove(num-1);
			System.out.println("삭제되었습니다.");
			System.out.println("=============================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}
	@Override
	public void delete1() {
		boolean back3 = true;
		while(back3) {

			System.out.println("제거할 상품의 번호를 입력해주세요.");
			int i=1;
			for(String manu : snack) {
				System.out.println(i+". "+manu+" ");
				i++;
			}
			num = sc.nextInt();
			System.out.print(":");
			snack.remove(num-1);
			System.out.println("삭제되었습니다.");
			System.out.println("=============================");
			System.out.println("추가 입력하시겠습니까? 1. 예 2. 아니요");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("잘못입력 하셨습니다.");
				break;
			}
		}
	}


	@Override
	public void exit() {
		System.exit(6);
	}
}
