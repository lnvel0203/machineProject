package machine;

import java.util.Scanner;

public class MainMachine {
	static int pnum=0;
	static int num=0;
	static int num1=0;
	static int num2=0;
	static int num3=0;
	boolean back;
	boolean back1;
	boolean back2;
	static int i =0;

	public static void main(String[] args) {
		mainForm();		
	}
	public static void mainForm(){
		Scanner sc = new Scanner(System.in);
		User u = new User2();
		Manager m = new Manager2();
		try {
			boolean back = true;
			while(back) {
				System.out.println("==================================================");
				System.out.println("\t자판기 입니다. 원하시는 서비스를 선택해 주세요.");
				System.out.println(" \t  1. 상품구매\t 2. 관리자 서비스");
				System.out.println("==================================================");
				System.out.print(":"); 	
				int fnum = sc.nextInt();
				if(fnum==1) {
					System.out.println("===============================================");
					System.out.println("금액을 넣어 주세요.");
					System.out.print(":");
					pnum = sc.nextInt();
					System.out.println(pnum+"원");
					u.goodsInfo();
				}else if(fnum==2){
					m.manage();
				}else {
					System.out.println("잘못입력 하셨습니다. 다시 입력하세요.");
				}
			}
		}catch(Exception e) {
			sc.close();
		}
	}
}
