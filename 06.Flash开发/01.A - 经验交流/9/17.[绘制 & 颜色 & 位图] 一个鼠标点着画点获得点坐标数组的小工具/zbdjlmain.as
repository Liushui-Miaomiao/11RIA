package 
{

	import flash.display.MovieClip;
	import flash.events.MouseEvent;

	public class zbdjlmain extends MovieClip
	{

		private var pX:Array = new Array();
		private var pY:Array = new Array();
		public function zbdjlmain()
		{
			stage.addEventListener(MouseEvent.CLICK,clickHandler);
			stage.addEventListener(MouseEvent.MOUSE_WHEEL,midclickHandler);
		}
		private function clickHandler(e:MouseEvent)
		{
			var m_Point:MovieClip = new jPoint();
			m_Point.x = stage.mouseX;
			m_Point.y = stage.mouseY;
			pX.push(stage.mouseX);
			pY.push(stage.mouseY);
			addChild(m_Point);
		}
		private function midclickHandler(e:MouseEvent)
		{
			trace(pX);
			trace(pY);
		}
	}

}