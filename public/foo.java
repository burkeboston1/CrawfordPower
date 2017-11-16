public void static main(String args[]) {
	int[] arr = {1, 2, 3, 4, 5};
	System.out.println(arr == giveItBack(arr));
}

static int[] giveItBack(int[] arr) {return arr;}
