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
				System.out.println("\t���Ǳ� �Դϴ�. ���Ͻô� ���񽺸� ������ �ּ���.");
				System.out.println(" \t  1. ��ǰ����\t 2. ������ ����");
				System.out.println("==================================================");
				System.out.print(":"); 	
				int fnum = sc.nextInt();
				if(fnum==1) {
					System.out.println("===============================================");
					System.out.println("�ݾ��� �־� �ּ���.");
					System.out.print(":");
					pnum = sc.nextInt();
					System.out.println(pnum+"��");
					u.goodsInfo();
				}else if(fnum==2){
					m.manage();
				}else {
					System.out.println("�߸��Է� �ϼ̽��ϴ�. �ٽ� �Է��ϼ���.");
				}
			}
		}catch(Exception e) {
			sc.close();
		}
	}
}
