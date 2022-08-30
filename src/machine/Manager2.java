package machine;
import java.util.Scanner;
public class Manager2 extends MachineInfo implements Manager {
	
	Scanner sc = new Scanner(System.in);
	@Override
	public void manage() {
		int count = 5;
		System.out.println("====================================");
		System.out.println("\t������ ��й�ȣ�� �Է��ϼ���.");
		System.out.println("====================================");
		System.out.print(":");
		back = true;
		while(back){
			num = sc.nextInt();
			if(num==1004) {
				System.out.println("������忡 �����մϴ�.");
				System.out.println("====================================");
				manage1();
			}else {
				System.out.println("��й�ȣ�� �߸� �Է��ϼ̽��ϴ�. �ٽ� �Է����ּ���.");
				--count;
				if(count == 0) {
					System.out.println("5ȸ �߸� �Է��ϼ̽��ϴ�. ����ȭ������ ���ư��ϴ�.");
					back = false;
				}
			}
		}
	}
	@Override
	public void manage1() {
		sc.nextLine();
		System.out.println("���Ͻô� �׸��� �����ϼ���.");
		back = true;
		while(back){
			System.out.println("1. �޴�����   2. ����� 3. �����̷� Ȯ��\n4. ���θ޴� 5. ���Ǳ� ����");
			System.out.println("========================================================================");
			num = sc.nextInt();
			if(num==1) {
				changemenu();
			}else if(num==2) {
				changestock();
			}else if(num==3) {
				System.out.println("�� ���Ͱ� �����̷��� Ȯ���մϴ�.");
				System.out.println("�� ����"+profit);
				System.out.println("===========================");
				pbox();
				System.out.println("| �ƹ� Ű�� ���� �ڷΰ��� |");
				System.out.print(":");
				num = sc.nextInt();
				back1 = false;
				continue;
			}else if(num==4){
				System.out.println("���θ޴��� ���ư���");
				MainMachine.mainForm();
			}else if(num==5){
				int count = 5;
				back1=true;
				while(back1) {
					System.out.println("������ ���Ǳ⸦ �����Ͻðڽ��ϱ�?. 1. �� 2. �ƴϿ�");
					System.out.print(":");
					num = sc.nextInt();
					if(num==1) {
						System.out.println("���Ǳ� ����");
						exit();
					}else if(num==2) {
						System.out.println("�������� ���ư��ϴ�.");
						System.out.println("======================================");
						back1 = false;
					}else{
						System.out.println("��й�ȣ�� �߸� �Է��ϼ̽��ϴ�. �ٽ� �Է����ּ���.");
						System.out.println("======================================");
						--count;
						if(count == 0) {
							System.out.println("5ȸ �߸� �Է��ϼ̽��ϴ�. ����ȭ������ ���ư��ϴ�.");
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
			System.out.println("���ų��� : "+count);
		}
	}
	@Override
	public void menuch() {
		System.out.println(box.get(num-1)+"�� �����մϴ�.");
		System.out.print(":");
		name[num-1] = sc.next();
		box.set(num-1, name[num-1]);
		System.out.println("===================================");
	}
	@Override
	public void changemenu() {
		back1 = true;
		while(back1) {
			System.out.println("��ǰ�� �����մϴ�. ������ ��ǰ�� �����ϼ���.");
			int i=1;
			for(String manu : box) {
				System.out.print(i+". "+manu+" ");
				i++;
			}
			System.out.println("| �ƹ� Ű�� ���� �ڷΰ��� |");
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
					System.out.println("�ڷΰ���");
					back2 = false;
					back1 = false;
					break;
				}
			}
		}
	}
	@Override
	public void stockch() {
		System.out.println(box.get(num-1)+"�� ��� �����մϴ�.");
		System.out.print(":");
		stock[num-1] = sc.nextInt();
		System.out.println(box.get(num-1)+"�� ��� "+stock[num-1]+"��ŭ �����մϴ�.");
		System.out.println("===================================");
	}
	@Override
	public void changestock() {
		back1 = true;
		while(back1) {
			System.out.println("��� �����մϴ�. ������ ��ǰ�� �����ϼ���.");
			int i=1;
			for(String manu : box) {
				System.out.print(i+". "+manu+" ");
				i++;
			}
			System.out.println("| �ƹ� Ű�� ���� �ڷΰ��� |");
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
				default : System.out.println("�ڷΰ���.");
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




