package machineProject;

import java.util.Scanner;

public class Manager2 extends MainchineInfo implements Manager{

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
			System.out.println("1. �޴����� 2. ����� 3. �����̷� Ȯ�� 4. ���θ޴� 5. ��ǰ�߰� 6. ��ǰ���� 7. ���Ǳ� ����");
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
				menumake();
			}else if(num==6){
				menudelete();
			}else if(num==7){
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
	public void changemenu() {
		back1 = true;
		while(back1) {
			System.out.println("��ǰ�� �����մϴ�. ������ ǰ���� �����ϼ���.| 1. ���� | 2. ���� | 3. �ڷΰ��� |");
			System.out.print(":");
			num = sc.nextInt();
			if(num==1) {
				int i=1;
				for(String manu : drink) {
					System.out.print(i+". "+manu+" ");
					i++;
				}
				System.out.println("\n===================================");
				System.out.println("�����Ͻ� ���Ḧ �����ϼ���.");
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
				System.out.println("�����Ͻ� ���ڸ� �����ϼ���.");
				System.out.print(":");
				num = sc.nextInt();
				menuch1();
			}else if(num==3){
				back1=false;
				break;
			}else {
				System.out.println("�߸��Է��ϼ̽��ϴ�.");
				continue;
			}
		}
	}
	@Override
	public void menuch() {
		boolean back3 = true;
		while(back3) {
			System.out.println(drink.get(num-1)+"�� �����մϴ�.");
			System.out.print(":");
			box = sc.next();
			drink.set(num-1, box);
			System.out.println("===================================");
			System.out.println(drink.set(num-1, box)+"�� ����Ǿ����ϴ�.");
			System.out.println("=============================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
			}
		}
	}
	@Override
	public void menuch1() { 
		boolean back3 = true;
		while(back3) {
			System.out.println(snack.get(num-1)+"�� �����մϴ�.");
			System.out.print(":");
			box = sc.next();
			snack.set(num-1, box);
			System.out.println("===================================");
			System.out.println(snack.set(num-1, box)+"�� ����Ǿ����ϴ�.");
			System.out.println("===================================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
			}
		}
	}
	@Override
	public void changestock() {
		back1 = true;
		while(back1) {
			System.out.println("����� �����մϴ�. ������ ǰ���� �����ϼ���.| 1. ���� | 2. ���� | 3. �ڷΰ��� |");
			System.out.print(":");
			num = sc.nextInt();
			if(num==1) {
				int i=1;
				for(String manu : drink) {
					System.out.print(i+". "+manu+" ");
					i++;
				}
				System.out.println("\n===================================");
				System.out.println("�����Ͻ� ���Ḧ �����ϼ���.");
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
				System.out.println("�����Ͻ� ���ڸ� �����ϼ���.");
				System.out.print(":");
				num = sc.nextInt();
				stockch1();
			}else if(num==3){
				back1=false;
				break;
			}else {
				System.out.println("�߸��Է��ϼ̽��ϴ�.");
				continue;
			}
		}
	}
	@Override
	public void stockch() {
		boolean back3 = true;
		while(back3) {
			System.out.println(drink.get(num-1)+"�� ��� �����մϴ�.");
			System.out.print(":");
			stock[num-1] = sc.nextInt();
			System.out.println(drink.get(num-1)+"�� ��� "+stock[num-1]+"��ŭ �����մϴ�.");
			System.out.println("===================================");
			System.out.println("===================================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
			}
		}
	}
	@Override
	public void stockch1() {
		boolean back3 = true;
		while(back3) {
			System.out.println(snack.get(num-1)+"�� ��� �����մϴ�.");
			System.out.print(":");
			stock1[num-1] = sc.nextInt();
			System.out.println(snack.get(num-1)+"�� ��� "+stock1[num-1]+"��ŭ �����մϴ�.");
			System.out.println("===================================");
			System.out.println("===================================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				back3 = false;
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
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
	public void menumake() {
		back1 = true;
		while(back1) {
			System.out.println("��ǰ�� �߰��մϴ�. ���Ͻô� ǰ���� ������ �ּ���. | 1. ���� | 2. ���� | �ƹ� Ű�� ���� �ڷΰ��� |");
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
					System.out.println("�ڷΰ���");
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
			System.out.println("\n�߰��� ��ǰ�� �Է����ּ���.");
			System.out.print(":");
			box = sc.next();
			drink.add(box);
			System.out.print(drink);
			System.out.println("\n=============================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
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
			System.out.println("\n�߰��� ��ǰ�� �Է����ּ���.");
			System.out.print(":");
			box = sc.next();
			snack.add(box);
			System.out.print(snack);
			System.out.println("\n=============================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
			}
		}
	}
	@Override
	public void menudelete() {
		back1 = true;
		while(back1) {
			System.out.println("��ǰ�� �����մϴ�. ���Ͻô� ǰ���� ������ �ּ���. | 1. ���� | 2. ���� | �ƹ� Ű�� ���� �ڷΰ��� |");
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
					System.out.println("�ڷΰ���");
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

			System.out.println("������ ��ǰ�� ��ȣ�� �Է����ּ���.");
			int i=1;
			for(String manu : drink) {
				System.out.println(i+". "+manu+" ");
				i++;
			}
			num = sc.nextInt();
			System.out.print(":");
			drink.remove(num-1);
			System.out.println("�����Ǿ����ϴ�.");
			System.out.println("=============================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
			}
		}
	}
	@Override
	public void delete1() {
		boolean back3 = true;
		while(back3) {

			System.out.println("������ ��ǰ�� ��ȣ�� �Է����ּ���.");
			int i=1;
			for(String manu : snack) {
				System.out.println(i+". "+manu+" ");
				i++;
			}
			num = sc.nextInt();
			System.out.print(":");
			snack.remove(num-1);
			System.out.println("�����Ǿ����ϴ�.");
			System.out.println("=============================");
			System.out.println("�߰� �Է��Ͻðڽ��ϱ�? 1. �� 2. �ƴϿ�");
			num= sc.nextInt();
			if(num==1) {
				continue;
			}else if(num==2) {
				break;
			}
			else {
				System.out.println("�߸��Է� �ϼ̽��ϴ�.");
				break;
			}
		}
	}


	@Override
	public void exit() {
		System.exit(6);
	}
}
