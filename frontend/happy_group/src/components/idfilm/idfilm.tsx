import s from './idfilm.module.css'
import { fbIcon, searchIcon, clock} from '@/assets/svgs'
import Image from 'next/image'
import React from 'react'
import useState from 'react'

export default function idfilm () {
    return (
    <div className={s.idfilm}>
        <div className={s.title}>
            <a className={s.db} href="https://www.galaxycine.vn/">TRANG CHỦ</a>
            <div> &emsp;>   &emsp;TRỊNH CÔNG SƠN </div>
        </div>
       <div className={s.container}>
            <div className={s.leftcolumn}>
                <div className={s.frametop}>
                    <div className={s.a1}>
                        <img src="https://cdn.galaxycine.vn/media/2023/3/30/brand-tcs-quay-lai-rap-300x450_1680172209610.jpg" alt="Mô tả ảnh"/>
                    </div>
                    <div className={s.intro}>
                        <div className={s.i1}> TRỊNH CÔNG SƠN </div>

                        <div className={s.des}>
                            <div className={s.noknow}>C16</div>
                            <div className={s.clock}>
                                <Image src={clock} alt={''} className={s.icon} />
                                <div className={s.hour}>120 phút</div>
                            </div>
                        </div>


                        <div className={s.i2}>Diễn viên:  Hoàng Hà, Lan Thy, Bùi Lan Hương, Avin Lu</div>
                        <div className={s.i2}> Đạo diễn:  Phan Gia Nhật Linh</div>
                        <div className={s.i2}> Thể loại:  Tình Cảm, Lãng Mạn</div>
                        <div className={s.i2}> Quốc gia:  Việt Nam</div>
                        <div className={s.i2}> Nhà sản xuất:  Galaxy Play</div>
                        <div className={s.i2}>Ngày khởi chiếu:  31/3/2023</div>
                        <div className={s.starvote}>
                            <div className={s.i2}>Đánh giá: </div>
                            <div className={s.rating}>
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label for="star5" ></label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                <label for="star4" ></label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label for="star3" ></label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label for="star2"></label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                <label for="star1" ></label>
                            </div>

                        </div>
                       
                    </div>
                    
                </div>
                <div className={s.framebot}>
                    <div>
                        <div>
                            <div className={s.j1}> NỘI DUNG PHIM</div>
                            <div className={s.j2}>Bộ phim khắc họa chân dung Trịnh Công Sơn từ một chàng thư sinh đa tài lãng tử trở thành “người nhạc sĩ viết tình ca hay nhất thế kỷ” với hàng trăm ca khúc về tình yêu và thân phận con người. Bộ phim “Trịnh Công Sơn” tràn đầy cảm hứng và nhiệt huyết của tuổi trẻ về người nhạc sĩ vĩ đại, đã sống, yêu và sáng tác trong một giai đoạn lịch sử của đất nước với tình yêu cứu rỗi, vượt lên mọi tan vỡ, khổ đau.<br></br>
                        Phim mới Trịnh Công Sơn chính thức ra mắt tại các rạp chiếu phim trên toàn quốc từ ngày 31.03.2023.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rightcolumn}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/biet-doi-rat-on">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/14/450x300_1678764834354.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/sieu-lua-gap-sieu-lay">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/trinh-cong-son">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/30/brand-tcs-quay-lai-rap-450x300_1680172207835.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.more}>
                        <a className={s.more} href="https://www.galaxycine.vn/phim-dang-chieu">XEM THÊM</a>
                    </div>
            </div>
       </div>
       <div className={s.mschedule}>
            <div> LỊCH CHIẾU</div>
            <div className={s.select}>
                <input type="date" className={s.datetime} value="2023-04-04"></input>
                <select  className={s.theater}>
                    <option>Tất cả các rạp</option>
                    <option>Galaxy Nguyễn Du</option>
                    <option>Galaxy Tân Bình</option>
                    <option>Galaxy Kinh Dương Vương</option>
                    <option>Galaxy Quang Trung</option>
                    <option>Galaxy Bến Tre</option>
                    <option>Galaxy Đà Nẵng</option>
                </select>
            </div>
            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Nguyễn Du
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Tân Bình
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Kinh Dương Vương
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Quang Trung
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Bến Tre
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Đà Nẵng
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

       </div>
    </div>
    );
}